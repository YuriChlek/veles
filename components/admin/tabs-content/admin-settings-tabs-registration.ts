import dynamic from "next/dynamic";

export const AdminLanguagesSettings = dynamic(
    () => import("@/components/admin/tabs-content/languages/AdminLanguagesSettings"),
    {
        ssr: false,
    },
);

export const AdminCustomerSettings = dynamic(
    () => import("@/components/admin/tabs-content/customer/AdminCustomerSettings"),
    {
        ssr: false,
    },
);

export const AdminCurrencySettings = dynamic(
    () => import("@/components/admin/tabs-content/currency/AdminCurrencySettings"),
    {
        ssr: false,
    },
);
