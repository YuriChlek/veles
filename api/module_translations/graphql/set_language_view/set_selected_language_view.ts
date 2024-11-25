import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import getLanguagesData from "@api/module_translations/graphql/get_languages/get_languages_data.ts";
import type {
    LanguageType,
    LangViewData,
} from "@api/module_translations/interfaces/languages.ts";

const setSelectedLanguageView = async (
    data: LangViewData,
): Promise<Array<LanguageType>> => {
    const query: string = `
        UPDATE ${TRANSLATIONS_DB}
        SET ${data.view} = $1
        WHERE language_code = $2
    `;

    const values = [data.value, data.language_code];

    const client = await dbConnection.connect();

    try {
        await client.query(query, values);
        const languages = await getLanguagesData();

        if (!Array.isArray(languages)) {
            throw new Error("getLanguagesData did not return an array");
        }

        await client.release();

        return languages;
    } catch (error) {
        await client.release();
        console.log(error);

        return [];
    }
};

export default setSelectedLanguageView;
