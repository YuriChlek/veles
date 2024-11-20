import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";

const createTranslationsDbTrigger = async (): Promise<void> => {
    const createFunctionQuery = `
        CREATE OR REPLACE FUNCTION enforce_unique_defaults()
        RETURNS TRIGGER AS $$
            BEGIN
                IF NEW.default_admin_language THEN
                UPDATE ${TRANSLATIONS_DB}
                SET default_admin_language = FALSE
                WHERE id <> NEW.id AND default_admin_language = TRUE;
            END IF;

            IF NEW.default_frontend_language THEN
                UPDATE ${TRANSLATIONS_DB}
                SET default_frontend_language = FALSE
                WHERE id <> NEW.id AND default_frontend_language = TRUE;
            END IF;

        RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    `;

    const createTriggerQuery = `
        CREATE TRIGGER enforce_defaults_trigger
        BEFORE INSERT OR UPDATE ON ${TRANSLATIONS_DB}
        FOR EACH ROW
        EXECUTE FUNCTION enforce_unique_defaults();
    `;

    const client = await dbConnection.connect();

    try {
        await client.query(createFunctionQuery);
        await client.query(createTriggerQuery);
    } catch (error) {
        console.error(error);
    } finally {
        await client.release();
    }
};

export default createTranslationsDbTrigger;
