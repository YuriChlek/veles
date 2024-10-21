"use client";

import React, {useEffect} from "react";
import styles from './admin.panel.header.module.scss'
import useAdminUserStore from "@/state/slices/adminUser";
import Logout from "@/components/admin/logout/Logout";

const AdminPanelHeader: React.FC = () => {
    const {adminUser, getAdminUser} = useAdminUserStore();

    useEffect(() => {
        if (!adminUser.login) {
            getAdminUser();
        }
    }, [])

    return (
        <header className={styles["admin-panel-header"]}>
            <h1 className="admin-panel-title">Dashboard</h1>
            <div className={styles["admin-customer-wrapper"]}>
                <span className={styles["admin-customer"]} >{adminUser.login}</span>
                <Logout className={"test"} />
            </div>
        </header>
    )
}

export default AdminPanelHeader;
