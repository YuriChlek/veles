import styles from "@/app/(frontend)/page.module.scss";
import '@/web/styles/frontend/index.scss'
import React from "react";

const FrontendRootLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element => {
    return (
        <div className="page">
            <header className={styles.header}>
                <h2>Header</h2>
            </header>
            { children }
            <footer className={styles.footer}>
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

export default FrontendRootLayout;
