import { create } from "zustand";
import type { AdminUserState } from "@/state/interfaces/adminUser/interfaces";

const useAdminUserStore = create<AdminUserState>((set) => ({
    adminUser: {
        login: "",
    },
    setAdminUser: (newUser) => {
        set((state) => {
            const updatedUser = { ...state.adminUser, ...newUser };

            if (typeof window !== "undefined") {
                localStorage.setItem("adminUserName", JSON.stringify(updatedUser));
            }

            return { adminUser: updatedUser };
        });
    },
    getAdminUser: () => {
        if (typeof window !== "undefined") {
            const userData = localStorage.getItem("adminUserName");

            if (userData) {
                const parsedData = JSON.parse(userData);
                set({ adminUser: { ...parsedData } });
            }
        }
    },
}));

export default useAdminUserStore;
