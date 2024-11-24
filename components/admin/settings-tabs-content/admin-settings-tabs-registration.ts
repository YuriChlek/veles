import dynamic from "next/dynamic";

export const AdminLanguagesSettings = dynamic(
    () => import("./languages/AdminLanguagesSettings"),
    {
        ssr: false,
    },
);

export const AdminCustomerSettings = dynamic(
    () => import("./customer/AdminCustomerSettings"),
    {
        ssr: false,
    },
);

export const AdminCurrencySettings = dynamic(
    () => import("./currency/AdminCurrencySettings"),
    {
        ssr: false,
    },
);
