"use client";

import React from "react";
import AddLanguage from "../add-language/AddLanguage.tsx";
import LanguagesTable from "@/components/admin/settings-tabs-content/languages-table/LanguagesTable.tsx";
import styles from "./admin.languages.settings.module.scss";
import useVelesTranslation from "@/utils/translations/translation.ts";
import Row from "@/components/admin/settings-row/SettingsRow.tsx"

const AdminLanguagesSettings: React.FC = () => {
    const _t = useVelesTranslation();

    return (
        <>
            <div className={styles["admin-languages-settings-row"]}>
                <AddLanguage />
            </div>
            <div className={styles["admin-languages-settings-row"]}>
                <LanguagesTable />
            </div>
        </>
    );
};

export default AdminLanguagesSettings;
