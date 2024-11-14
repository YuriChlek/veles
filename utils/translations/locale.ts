"use server";

import { cookies } from "next/headers";
import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

const COOKIE_USER_LANG = "customer_locale";
//const COOKIE_ADMIN_LANG = 'admin_locale';

export const getUserLocale = async () => {
    return cookies().get(COOKIE_USER_LANG)?.value || defaultLocale;
};

export const setUserLocale = async (locale: Locale) => {
    cookies().set(COOKIE_USER_LANG, locale);
};
