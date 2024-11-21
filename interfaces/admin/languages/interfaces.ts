export interface LanguageType {
    language_view: string;
    language_code: string;
    frontend_language?: boolean;
    admin_language?: boolean;
}

export interface SetLanguageResponse {
    setLanguage: Array<LanguageType>;
}
