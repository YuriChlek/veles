import React from "react";
import AdminCustomer from "@/components/admin/customer/AdminCustomer.tsx";
import styles from "./admin.panel.header.module.scss";

const AdminPanelHeader: React.FC = () => {
    return (
        <header className={styles["admin-panel-header"]}>
            <h1 className="admin-panel-title">Page title</h1>
            <AdminCustomer />
        </header>
    );
};

export default AdminPanelHeader;
