"use client";

import React, { useState, useEffect } from "react";
import Select from "@/components/base/select/Select";
import type { SelectOption } from "@/interfaces/admin/select/interfaces";
import {
    LanguageSwitcherProps,
    LanguageType,
} from "@/interfaces/admin/languages/interfaces.ts";
import { setUserLocale } from "@/utils/translations/locale.ts";
import { ADMIN_AREA } from "@/constants/locales/locales_constants.ts";
import type { Locale } from "@/i18n/config.ts";
import styles from "@/components/admin/language-switcher/admin.language.switcher.module.scss";

const AdminLanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    langData = [],
    lang = "",
}) => {
    const [language, setLanguage] = useState<Locale>("");
    const [languagesData, setLanguagesData] = useState<Array<SelectOption>>([]);

    useEffect(() => {
        const data: Array<SelectOption> = langData.map((language: LanguageType) => ({
            label: language.language_view,
            value: language.language_code,
        }));

        setLanguagesData(data);
        setLanguage(lang);
    }, []);

    const selectHandler = async (locale: Locale): Promise<void> => {
        setLanguage(locale);
        await setUserLocale(locale, ADMIN_AREA);
    };

    return (
        <Select
            options={languagesData}
            value={language}
            onChange={selectHandler}
            borderNone={true}
            className={styles["admin-language-switcher"]}
        />
    );
};

export default AdminLanguageSwitcher;
