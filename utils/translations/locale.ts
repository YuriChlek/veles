"use server";

import { cookies } from "next/headers";
import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";
const COOKIE_USER_LANG = "VELES_CUSTOMER_LOCALE";
//const COOKIE_ADMIN_LANG = 'VELES_ADMIN_LOCALE';

/*const area: Record<string, string> = {
    admin_panel: "VELES_ADMIN_LOCALE",
    frontend: "VELES_CUSTOMER_LOCALE"
}*/

export const getUserLocale = async () => {
    return cookies().get(COOKIE_USER_LANG)?.value || defaultLocale;
};

export const setUserLocale = async (locale: Locale) => {
    cookies().set(COOKIE_USER_LANG, locale);
};
