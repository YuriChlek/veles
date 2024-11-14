import { create } from "zustand";
import { devtools } from "zustand/middleware";

import AdminUserSlice from "./slices/adminUser";

const useStore = create((set) => ({
    ...AdminUserSlice(set),
}));

export default useStore;
