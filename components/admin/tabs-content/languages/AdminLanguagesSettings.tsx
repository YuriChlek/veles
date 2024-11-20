"use client";

import React from "react";
import AddLanguage from "@/components/admin/tabs-content/add-language/AddLanguage.tsx";
import LanguagesTable from "@/components/admin/tabs-content/languages-table/LanguagesTable.tsx";
import styles from "./admin.languages.settings.module.scss";
import useVelesTranslation from "@/utils/translations/translation.ts";

const AdminLanguagesSettings: React.FC = () => {
    const _t = useVelesTranslation();

    return (
        <>
            <div className={styles["admin-languages-settings-row"]}>
                <h2 className={styles["admin-languages-article"]}>
                    {_t("Add Languages")}
                </h2>
                <AddLanguage />
            </div>
            <div className={styles["admin-languages-settings-row"]}>
                <h2 className={styles["admin-languages-article"]}>
                    {_t("Edit Languages view")}
                </h2>
                <LanguagesTable />
            </div>
        </>
    );
};

export default AdminLanguagesSettings;
