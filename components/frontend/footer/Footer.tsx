import React from "react";
import styles from "./footer.module.scss";

const FrontendFooter: React.FC = async () => {
    return (
        <footer className={styles.footer}>
            <h2>Footer</h2>
        </footer>
    );
};

export default FrontendFooter;
