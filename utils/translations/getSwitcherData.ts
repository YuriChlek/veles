import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import { ADMIN_AREA } from "@/constants/locales/locales_constants.ts";

export const getSwitcherData = (
    switcherData: Array<LanguageType> | undefined | null,
    area?: string | null,
): Array<LanguageType> => {
    if (!Array.isArray(switcherData)) {
        return [];
    }

    const data = switcherData
        .filter(({ frontend_language, admin_language }) =>
            area === ADMIN_AREA ? admin_language : frontend_language,
        )
        .map(({ language_code, language_view }) => ({
            language_code,
            language_view,
        }));

    return data.length ? data : [];
};
