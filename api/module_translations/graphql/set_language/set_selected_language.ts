import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import getLanguagesData from "@api/module_translations/graphql/get_languages/get_languages_data.ts";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const setSelectedLanguage = async (data: LanguageType): Promise<Array<LanguageType>> => {
    const query: string = `INSERT INTO ${TRANSLATIONS_DB} (language_view, language_code, default_frontend_language, default_admin_language)
                           VALUES ($1, $2, $3, $4)`;

    const values = [
        data.language_view,
        data.language_code,
        data.default_frontend_language,
        data.default_admin_language,
    ];

    const client = await dbConnection.connect();

    try {
        await client.query(query, values);

        const languages = await getLanguagesData();

        if (!Array.isArray(languages)) {
            throw new Error("getLanguagesData did not return an array");
        }

        return languages;
    } catch (error) {
        console.error(error);
        await client.release();

        return [];
    }
};

export default setSelectedLanguage;
