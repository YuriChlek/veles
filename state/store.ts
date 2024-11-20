import { create } from "zustand";
import { devtools } from "zustand/middleware";

import AdminUserSlice from "./slices/adminUser";
import LanguagesSlice from "./slices/languages";

const useStore = create((set) => ({
    ...AdminUserSlice(set),
    ...LanguagesSlice(set),
}));

export default useStore;
