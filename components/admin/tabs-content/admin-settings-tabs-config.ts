import { AdminCustomerSettings, AdminLanguagesSettings, AdminCurrencySettings } from "./admin-settings-tabs-registration";

const AdminSettingsTabsConfig = [
    {
        id: "languages",
        label: "Languages",
        order: 0,
        component: AdminLanguagesSettings,
    },
    {
        id: "admin-settings",
        label: "Admin Settings",
        order: 1,
        component: AdminCustomerSettings,
    },
    {
        id: "currency-settings",
        label: "Currency Settings",
        order: 1,
        component: AdminCurrencySettings,
    },
];

export default AdminSettingsTabsConfig;
