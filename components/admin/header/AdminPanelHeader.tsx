import React from "react";
import AdminCustomer from "@/components/admin/customer/AdminCustomer.tsx";
import styles from "./admin.panel.header.module.scss";
import AdminLanguageSwitcher from "@/components/admin/language-switcher/AdminLanguageSwitcher.tsx";
import { getUserLocale } from "@/utils/translations/locale.ts";
import { ADMIN_AREA } from "@/constants/locales/locales_constants.ts";
import {
    getDefaultFrontendLocale,
    getSwitcherData,
} from "@/utils/translations/getLocalesData.ts";
import { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const AdminPanelHeader: React.FC = async () => {
    const lang: string = (await getUserLocale(ADMIN_AREA)) || getDefaultFrontendLocale();
    const localesData: Array<LanguageType> = (await getSwitcherData(ADMIN_AREA)) || [];

    return (
        <header className={styles["admin-panel-header"]}>
            <h1 className="admin-panel-title">Page title</h1>
            <div className={styles["admin-panel-header-cel"]}>
                <AdminLanguageSwitcher langData={localesData} lang={lang} />
                <AdminCustomer />
            </div>
        </header>
    );
};

export default AdminPanelHeader;
