import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import verifyHasTable from "@api/module_db/actions/check/has_table.ts";
import createTranslationsDefaultValue from "@api/module_translations/actions/create/create_translations_default_value.ts";
import createTranslationsDbTrigger from "@api/module_translations/actions/create/create_translations_db_trigger.ts";

const createTranslationsTable = async (): Promise<void> => {
    const hasTable = await verifyHasTable(TRANSLATIONS_DB);

    if (hasTable) {
        return;
    }

    const query: string = `
        CREATE TABLE IF NOT EXISTS ${TRANSLATIONS_DB} (
            id SERIAL PRIMARY KEY,
            language_view VARCHAR(32),
            language_code VARCHAR(2),
            default_frontend_language BOOLEAN DEFAULT FALSE,
            default_admin_language BOOLEAN DEFAULT FALSE
        )`;

    const client = await dbConnection.connect();

    try {
        await client.query(query);
        await createTranslationsDbTrigger();
        await createTranslationsDefaultValue();
    } catch (error) {
        console.error(error);
    } finally {
        await client.release();
    }
};

export default createTranslationsTable;
