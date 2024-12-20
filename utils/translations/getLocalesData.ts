import { print } from "graphql/index";
import { AxiosResponse } from "axios";
import { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import GET_LOCALES_DATA_QUERY from "@/i18n/graphql/get-locales-data.graphql";
import { Locale } from "@/i18n/config.ts";

const query = print(GET_LOCALES_DATA_QUERY);

export const getLocalesData = async (): Promise<Array<LanguageType>> => {
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
