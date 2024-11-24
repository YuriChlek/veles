import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import getLanguagesData from "@api/module_translations/graphql/get_languages/get_languages_data.ts";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const removeSelectedLanguage = async (
    languageCode: string,
): Promise<Array<LanguageType>> => {
    const query: string = `DELETE FROM ${TRANSLATIONS_DB} WHERE language_code = $1`;

    const client = await dbConnection.connect();

    try {
        await client.query(query, [languageCode]);
        const languages = await getLanguagesData();

        if (!Array.isArray(languages)) {
            throw new Error("getLanguagesData did not return an array");
        }

        await client.release();

        return languages;
    } catch (error) {
        console.error(error);
        await client.release();

        return [];
    }
};

export default removeSelectedLanguage;
