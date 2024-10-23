import React from "react";
import Logo from "@/components/base/logo/Logo";
import style from "./header.module.scss"

const FrontendHeader: React.FC = () => {
    return (
        <header className={style.header}>
            <Logo/>
        </header>
    )
}

export default FrontendHeader;
