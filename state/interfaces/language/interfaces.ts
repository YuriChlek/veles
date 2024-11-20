import { LanguageType } from "@/interfaces/admin/languages/interfaces";

export interface LanguagesStore {
    currentLanguages: Array<LanguageType>;
    selectedLanguage: LanguageType;
    setCurrentLanguages: (data: Array<LanguageType>) => void;
    setSelectedLanguage: (data: LanguageType) => void;
}
