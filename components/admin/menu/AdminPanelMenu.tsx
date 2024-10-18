"use client";

import React, {lazy} from "react";
import {useState} from "react";
import Link from 'next/link'
import AdminPanelLogo from "@/components/admin/logo/AdminPanelLogo";
import styles from './admin.panel.menu.module.scss'
import {adminMenuRouting} from "@/utils/admin/adminMenuRouting";
import {AdminMenuTopItem} from "@/interfaces/admin/menu/adminMenu";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon";
import clsx from "clsx";

const AdminPanelMenuItem = lazy(() => import('../menu/AdminPanelMenuItem'));

const AdminPanelMenu: React.FC = () => {
    const [openItemId, setOpenItemId] = useState('');

    const toggleDrawer = (openId: string) => () => {
        if (openId === openItemId) {
            setOpenItemId('');
            return;
        }

        setOpenItemId(openId);
    };

    return (
        <nav className={styles.menu}>
            <AdminPanelLogo/>
            {adminMenuRouting.map((item: AdminMenuTopItem) => (
                <div className={clsx(styles["menu-item-wrapper"], {[styles.active]: item.id === openItemId})} key={item.itemText}>
                    {item.linkHref ? (
                        <Link onClick={toggleDrawer(item.id)} className={styles["menu-item"]} href={item.linkHref} >
                            <DynamicReactIcon iconName={item.icon} />
                            {item.itemText}
                        </Link>
                    ) : (
                        <button className={styles["menu-item"]} onClick={toggleDrawer(item.id)}>
                            <DynamicReactIcon iconName={item.icon} />
                            {item.itemText}
                        </button>
                    )}
                    {item.children.length > 0 &&
                        <AdminPanelMenuItem id={item.id} toggledId={openItemId} setOpenItemId={setOpenItemId} items={item.children}/>}
                </div>
            ))}
        </nav>
    )
}

export default AdminPanelMenu;
