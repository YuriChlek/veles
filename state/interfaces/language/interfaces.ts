import { LanguageType } from "@/interfaces/admin/languages/interfaces";

export interface LanguagesStore {
    currentLanguages: Array<LanguageType>;
    selectedLanguage: LanguageType;
    customerLanguage: string;
    setCurrentLanguages: (data: Array<LanguageType>) => void;
    setSelectedLanguage: (data: LanguageType) => void;
    setCustomerLanguage: (data: string) => void;
}
