import dbConnection from "@api/module_db/actions/create/new_connection";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import type { LanguageType } from "@api/module_translations/interfaces/languages.ts";

const getLanguagesData = async (): Promise<Array<LanguageType>> => {
    const query = `SELECT ALL language_view, language_code, frontend_language, admin_language
                   FROM ${TRANSLATIONS_DB}
                   ORDER BY id;`;
    const client = await dbConnection.connect();

    try {
        const translations = await client.query(query);
        await client.release();

        return translations.rows as Array<LanguageType>;
    } catch (error) {
        console.error(error);
        await client.release();

        return [];
    }
};

export default getLanguagesData;
