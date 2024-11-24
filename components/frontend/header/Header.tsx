import React from "react";
import Logo from "@/components/base/logo/Logo";
import LanguageSwitcher from "@/components/frontend/languageSwitcher/LanguageSwitcher.tsx";
import Search from "@/components/frontend/search/Search.tsx";
import style from "./header.module.scss";
import Customer from "@/components/frontend/customer/Customer.tsx";
import MiniCart from "@/components/frontend/minicart/Minicart.tsx";
import { getSwitcherData } from "@/utils/translations/getLocalesData.ts";

const FrontendHeader: React.FC = async () => {
    const locales = await getSwitcherData();

    return (
        <header className={style.header}>
            <div className={style["header-menu-wrapper"]}></div>
            <Logo />
            <div className={style["header-panel"]}>
                <Search />
                <LanguageSwitcher locales={locales} />
                <Customer />
                <MiniCart />
            </div>
        </header>
    );
};

export default FrontendHeader;
