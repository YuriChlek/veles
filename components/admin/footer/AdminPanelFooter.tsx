import React from "react";
import styles from './admin.panel.footer.module.scss'

const AdminPanelFooter: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {__("ADMIN PANEL FOOTER")}
        </footer>
    )
}

export default AdminPanelFooter;
