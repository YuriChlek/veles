import {
    getLocales,
    getDefaultFrontendLocale,
} from "@/utils/translations/getLocalesData.ts";
export type Locale = (typeof locales)[number];

export const locales = getLocales();
export const defaultLocale: Locale = getDefaultFrontendLocale();
