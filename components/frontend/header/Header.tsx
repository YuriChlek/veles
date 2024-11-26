import React from "react";
import Logo from "@/components/base/logo/Logo";
import LanguageSwitcher from "@/components/frontend/language-switcher/LanguageSwitcher.tsx";
import Search from "@/components/frontend/search/Search.tsx";
import style from "./header.module.scss";
import Customer from "@/components/frontend/customer/Customer.tsx";
import { getLocalesData } from "@/utils/translations/getLocalesData.ts";
import { getSwitcherData } from "@/utils/translations/getSwitcherData.ts";
import { getUserLocale } from "@/utils/translations/locale.ts";
import { FRONTEND_AREA } from "@/constants/locales/locales_constants.ts";

const FrontendHeader: React.FC = async () => {
    const userLocale = await getUserLocale();
    const localesData = await getLocalesData();
    const frontendLocales = getSwitcherData(localesData);

    return (
        <header className={style.header}>
            <Logo href={"/"} area={FRONTEND_AREA} />
            <div className={style["header-panel"]}>
                <LanguageSwitcher locales={frontendLocales} userLocale={userLocale} />
                <Customer />
                <Search />
            </div>
        </header>
    );
};

export default FrontendHeader;
