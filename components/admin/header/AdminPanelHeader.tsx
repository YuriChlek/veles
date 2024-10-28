"use client";

import React, {useEffect} from "react";
import styles from './admin.panel.header.module.scss'
import useAdminUserStore from "@/state/slices/adminUser";
import Logout from "@/components/admin/logout/Logout";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon.tsx";

const AdminPanelHeader: React.FC = () => {
    const {adminUser, getAdminUser} = useAdminUserStore();

    useEffect(() => {
        if (!adminUser.login) {
            getAdminUser();
        }
    }, [])

    return (
        <header className={styles["admin-panel-header"]}>
            <h1 className="admin-panel-title">Page title</h1>
            <div className={styles["admin-customer-wrapper"]}>
                <span className={styles["admin-customer"]} >{/*adminUser.login*/}
                    <DynamicReactIcon iconName={"GoPersonFill"} />
                </span>
                <Logout />
            </div>
        </header>
    )
}

export default AdminPanelHeader;
