import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import { TRANSLATIONS_DB } from "@api/module_db/constants/db_constants.ts";
import defaultLanguages from "@/components/admin/tabs-content/add-language/defaultLanguages.ts";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const createTranslationsDefaultValue = async (): Promise<void> => {
    const query: string = `INSERT INTO ${TRANSLATIONS_DB} (language_view, language_code, default_frontend_language, default_admin_language)
            VALUES ($1, $2, $3, $4)`;

    const defaultLang: LanguageType | undefined = defaultLanguages.find(
        (lang) => lang.default_frontend_language && lang.default_admin_language,
    );

    if (!defaultLang) {
        console.error("Default language not found. Skipping translation creation.");
        return;
    }

    const values = [
        defaultLang.language_view,
        defaultLang.language_code,
        defaultLang.default_frontend_language,
        defaultLang.default_admin_language,
    ];

    const client = await dbConnection.connect();

    try {
        await client.query(query, values);
    } catch (error) {
        console.error(error);
    } finally {
        await client.release();
    }
};

export default createTranslationsDefaultValue;
