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
import { getSwitcherData } from "@/utils/translations/getSwitcherData.ts";
import useLanguagesStore from "@/state/slices/languages.ts";

const AdminLanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    langData = [],
    lang = "",
}) => {
    const [languagesData, setLanguagesData] = useState<Array<SelectOption>>([]);
    const {
        customerLanguage,
        setCustomerLanguage,
        currentLanguages,
        setCurrentLanguages,
    } = useLanguagesStore();

    useEffect(() => {
        createSwitcherData();
    }, [currentLanguages]);

    const createSwitcherData = () => {
        if (!currentLanguages.length) {
            setCurrentLanguages(langData);
        }
        const currentData = currentLanguages.length ? currentLanguages : langData;
        const adminLocales = getSwitcherData(currentData, ADMIN_AREA);
        const switcherData: Array<SelectOption> = adminLocales.map(
            (language: LanguageType) => ({
                label: language.language_view,
                value: language.language_code,
            }),
        );

        setLanguagesData(switcherData);
        setCustomerLanguage(lang);
    };

    const selectHandler = async (locale: Locale): Promise<void> => {
        setCustomerLanguage(locale);
        await setUserLocale(locale, ADMIN_AREA);
    };

    return (
        <Select
            options={languagesData}
            value={customerLanguage}
            onChange={selectHandler}
            borderNone={true}
            className={styles["admin-language-switcher"]}
        />
    );
};

export default AdminLanguageSwitcher;
