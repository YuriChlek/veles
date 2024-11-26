import type { AdminMenuTopItem } from "@/interfaces/admin/menu/adminMenu";
import {
    NEXT_PUBLIC_FRONTEND_HOST,
    NEXT_PUBLIC_FRONTEND_PORT,
} from "@/constants/env/env_constants.ts";

const baseUrl = `${NEXT_PUBLIC_FRONTEND_HOST}:${NEXT_PUBLIC_FRONTEND_PORT}`;
export const adminMenuRouting: Array<AdminMenuTopItem> = [
    {
        id: "menu-admin-dashboard",
        icon: "AiOutlineDashboard",
        itemText: "Dashboard",
        linkHref: `${baseUrl}/admin/panel/dashboard`,
        children: [],
    },
    {
        id: "menu-admin-content",
        icon: "AiOutlineProduct",
        itemText: "Content",
        linkHref: "",
        children: [
            {
                id: "menu-admin-pages",
                icon: "",
                itemText: "Pages",
                linkHref: `${baseUrl}/admin/panel/pages`,
            },
            {
                id: "menu-admin-cv-templates",
                icon: "",
                itemText: "CV templates",
                linkHref: `${baseUrl}/admin/panel/cv-templates`,
            },
        ],
    },
    {
        id: "menu-admin-customers",
        icon: "AiOutlineUser",
        itemText: "Customers",
        linkHref: "",
        children: [
            {
                id: "menu-admin-admins",
                icon: "test",
                itemText: "Admin Customers",
                linkHref: "#",
            },
            {
                id: "menu-admin-customers",
                icon: "test",
                itemText: "Customers",
                linkHref: "#",
            },
        ],
    },
    {
        id: "menu-admin-settings",
        icon: "AiOutlineSetting ",
        itemText: "Settings",
        linkHref: `${baseUrl}/admin/panel/settings`,
        children: [],
    },
];
