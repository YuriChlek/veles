import { getLocales, getDefaultFrontendLocale } from "@/i18n/utils/getLocalesData.ts";
export type Locale = (typeof locales)[number];

export const locales = getLocales();
export const defaultLocale: Locale = getDefaultFrontendLocale();
