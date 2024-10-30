import {lazy} from "react";

export const AdminLanguagesSettings = lazy(() => import("@/components/admin/tabs-content/languages/AdminLanguagesSettings"))
export const AdminCustomerSettings = lazy(() => import("@/components/admin/tabs-content/customer/AdminCustomerSettings"))
export const AdminCurrencySettings = lazy(() => import("@/components/admin/tabs-content/currency/AdminCurrencySettings"))
