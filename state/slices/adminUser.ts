import { create } from "zustand";
import type { AdminUserState, AdminActions } from "@/state/interfaces/adminUser/interfaces";

const useAdminUserStore = create<AdminUserState & AdminActions>((set) => ({
    adminUser: {
        login: "",
    },
    setAdminUser: (newUser) => {
        set((state) => {
            const updatedUser = { ...state.adminUser, ...newUser };

            if (typeof window !== "undefined") {
                localStorage.setItem("adminUserName", JSON.stringify(updatedUser)); // Збереження в localStorage
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
