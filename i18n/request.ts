import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/utils/translations/locale";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
    const headersList = await headers();
    const area = headersList.get("area");
    const locale = await getUserLocale(area);

    return {
        locale,
        messages: (await import(`./translations/${locale}.json`)).default,
    };
});
