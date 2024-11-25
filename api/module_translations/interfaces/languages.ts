export interface LangViewData {
    view: string;
    value: string;
    language_code: string;
}

export interface LanguageType {
    language_view: string;
    language_code: string;
    frontend_language?: boolean;
    admin_language?: boolean;
}
