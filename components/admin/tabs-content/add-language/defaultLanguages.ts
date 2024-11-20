import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const defaultLanguages: Array<LanguageType> = [
    {
        language_view: "English",
        language_code: "en",
        default_frontend_language: true,
        default_admin_language: true,
    },
    {
        language_view: "Українська",
        language_code: "uk",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Deutsch",
        language_code: "de",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Français",
        language_code: "fr",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Italiano",
        language_code: "it",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Español",
        language_code: "es",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Português",
        language_code: "pt",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Nederlands",
        language_code: "nl",
        default_frontend_language: false,
        default_admin_language: false,
    },
    {
        language_view: "Polski",
        language_code: "pl",
        default_frontend_language: false,
        default_admin_language: false,
    },
];

export default defaultLanguages;
