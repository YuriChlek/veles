import dbConnection from "@api/module_db/actions/create/new_connection";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const getLanguagesData = async (): Promise<Array<LanguageType>> => {
    const query = `SELECT ALL language_view, language_code, default_frontend_language, default_admin_language
                   FROM ${TRANSLATIONS_DB}`;
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
