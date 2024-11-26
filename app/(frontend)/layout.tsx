import React from "react";
import "@/web/styles/frontend/index.scss";
import FrontendHeader from "@/components/frontend/header/Header.tsx";
import FrontendFooter from "@/components/frontend/footer/Footer.tsx";

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
