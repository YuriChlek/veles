"use server";

import { cookies } from "next/headers";
import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";
import {
    COOKIE_ADMIN_LANG,
    COOKIE_USER_LANG,
    ADMIN_AREA,
} from "@/constants/locales/locales_constants.ts";

export const getUserLocale = async (area?: string | null) => {
    const cookiesName = area === ADMIN_AREA ? COOKIE_ADMIN_LANG : COOKIE_USER_LANG;
    return (await cookies()).get(cookiesName)?.value || defaultLocale;
};

export const setUserLocale = async (locale: Locale, area?: string | null) => {
    const cookiesName = area === ADMIN_AREA ? COOKIE_ADMIN_LANG : COOKIE_USER_LANG;
    (await cookies()).set(cookiesName, locale);
};
