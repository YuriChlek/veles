import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const defaultLanguages: Array<LanguageType> = [
    {
        language_view: "English",
        language_code: "en",
        frontend_language: true,
        admin_language: true,
    },
    {
        language_view: "Українська",
        language_code: "uk",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Deutsch",
        language_code: "de",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Français",
        language_code: "fr",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Italiano",
        language_code: "it",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Español",
        language_code: "es",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Português",
        language_code: "pt",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Nederlands",
        language_code: "nl",
        frontend_language: false,
        admin_language: false,
    },
    {
        language_view: "Polski",
        language_code: "pl",
        frontend_language: false,
        admin_language: false,
    },
];

export default defaultLanguages;
