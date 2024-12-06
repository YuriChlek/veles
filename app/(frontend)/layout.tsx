import React from "react";
import FrontendHeader from "@/components/frontend/header/Header.tsx";
import FrontendFooter from "@/components/frontend/footer/Footer.tsx";
import "@/web/styles/frontend/index.scss";

const FrontendRootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element => {
    return (
        <div className="page">
            <FrontendHeader />
            {children}
            <FrontendFooter />
        </div>
    );
};

export default FrontendRootLayout;
