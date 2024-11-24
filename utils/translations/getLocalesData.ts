import { print } from "graphql/index";
import { AxiosResponse } from "axios";
import { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import GET_LOCALES_DATA_QUERY from "@/i18n/graphql/get-locales-data.graphql";
import { Locale } from "@/i18n/config.ts";
import { ADMIN_AREA } from "@/constants/locales/locales_constants.ts";

const query = print(GET_LOCALES_DATA_QUERY);

const getLocalesData = async () => {
    try {
        const response: AxiosResponse<GraphQLResponseInterface<Record<string, unknown>>> =
            await GraphqlRequest({ query }, "get_languages");

        const languagesData = response.data.data as {
            languages: Array<LanguageType>;
        };

        return languagesData.languages;
    } catch (error) {
        console.error("Error fetching languages:", error);
        return [];
    }
};

let localesData = (await getLocalesData()) as Array<LanguageType>;

export const resetLocalesData = async () => {
    localesData = (await getLocalesData()) as Array<LanguageType>;

    return localesData;
};

export const getLocales = (): Array<string> => {
    return localesData.map((item) => item.language_code);
};

export const getDefaultFrontendLocale = (): Locale => {
    return "en";
};

export const getSwitcherData = async (
    area?: string | null,
): Promise<Array<LanguageType>> => {
    const data = localesData
        .filter(({ frontend_language, admin_language }) =>
            area === ADMIN_AREA ? admin_language : frontend_language,
        )
        .map(({ language_code, language_view }) => ({
            language_code,
            language_view,
        }));

    return data.length ? data : [];
};
