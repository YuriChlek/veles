"use client";

import React from "react";
import AddLanguage from "../add-language/AddLanguage.tsx";
import LanguagesTable from "@/components/admin/settings-tabs-content/languages-table/LanguagesTable.tsx";
import styles from "./admin.languages.settings.module.scss";

const AdminLanguagesSettings: React.FC = () => {
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
