export interface LanguageType {
    language_view: string;
    language_code: string;
    default_frontend_language?: boolean;
    default_admin_language?: boolean;
}

export interface SetLanguageResponse {
    setLanguage: Array<LanguageType>;
}
