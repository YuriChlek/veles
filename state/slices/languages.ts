import { create } from "zustand";
import type { LanguagesStore } from "@/state/interfaces/language/interfaces.ts";

const useLanguagesStore = create<LanguagesStore>((set) => ({
    currentLanguages: [],
    selectedLanguage: {
        language_view: "",
        language_code: "",
    },
    setCurrentLanguages: (data) => set({ currentLanguages: data }),
    setSelectedLanguage: (data) => set({ selectedLanguage: data }),
}));

export default useLanguagesStore;
