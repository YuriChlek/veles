import { create } from "zustand";
import type { LanguagesStore } from "@/state/interfaces/language/interfaces.ts";

const useLanguagesStore = create<LanguagesStore>((set) => ({
    currentLanguages: [],
    selectedLanguage: {
        language_view: "",
        language_code: "",
    },
    customerLanguage: "",
    setCurrentLanguages: (data) => set({ currentLanguages: data }),
    setSelectedLanguage: (data) => set({ selectedLanguage: data }),
    setCustomerLanguage: (data) => set({ customerLanguage: data }),
}));

export default useLanguagesStore;
