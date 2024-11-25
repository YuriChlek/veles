import React from "react";
import Logo from "@/components/base/logo/Logo";
import LanguageSwitcher from "@/components/frontend/language-switcher/LanguageSwitcher.tsx";
import Search from "@/components/frontend/search/Search.tsx";
import style from "./header.module.scss";
import Customer from "@/components/frontend/customer/Customer.tsx";
import MiniCart from "@/components/frontend/minicart/Minicart.tsx";
import { getLocalesData } from "@/utils/translations/getLocalesData.ts";
import { getSwitcherData } from "@/utils/translations/getSwitcherData.ts";
import { getUserLocale } from "@/utils/translations/locale.ts";

const FrontendHeader: React.FC = async () => {
    const userLocale = await getUserLocale();
    const localesData = await getLocalesData();
    const frontendLocales = getSwitcherData(localesData);

    return (
        <header className={style.header}>
            <div className={style["header-menu-wrapper"]}></div>
            <Logo />
            <div className={style["header-panel"]}>
                <Search />
                <LanguageSwitcher locales={frontendLocales} userLocale={userLocale} />
                <Customer />
                <MiniCart />
            </div>
        </header>
    );
};

export default FrontendHeader;
