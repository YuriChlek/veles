import React from "react";
import styles from "@/app/(frontend)/page.module.scss";
import '@/web/styles/frontend/index.scss'
import FrontendHeader from "@/components/frontend/header/Header.tsx";

const FrontendRootLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element => {
    return (
        <div className="page">
            <FrontendHeader />
            { children }
            <footer className={styles.footer}>
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

export default FrontendRootLayout;
