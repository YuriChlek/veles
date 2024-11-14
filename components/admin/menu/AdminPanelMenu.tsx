"use client";

import React, { lazy } from "react";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/base/logo/Logo";
import styles from "./admin.panel.menu.module.scss";
import { adminMenuRouting } from "@/components/admin/menu/routing/adminMenuRouting.ts";
import type { AdminMenuTopItem } from "@/interfaces/admin/menu/adminMenu";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon";
import clsx from "clsx";
import _t from "@/utils/translations/translation.ts";

const AdminPanelMenuItem = lazy(() => import("../menu/AdminPanelMenuItem"));

const AdminPanelMenu: React.FC = () => {
    const [openItemId, setOpenItemId] = useState("");

    const toggleDrawer = (openId: string) => () => {
        if (openId === openItemId) {
            setOpenItemId("");
            return;
        }

        setOpenItemId(openId);
    };

    return (
        <nav className={styles.menu}>
            <div className={styles["menu-logo-wrapper"]}>
                <Logo />
            </div>
            {adminMenuRouting.map((item: AdminMenuTopItem) => (
                <div
                    className={clsx(styles["menu-item-wrapper"], {
                        [styles.active]: item.id === openItemId,
                    })}
                    key={item.itemText}
                >
                    {item.linkHref ? (
                        <Link
                            onClick={toggleDrawer(item.id)}
                            className={styles["menu-item"]}
                            href={item.linkHref}
                        >
                            <DynamicReactIcon iconName={item.icon} />
                            <span className={styles["menu-item-text"]}>
                                {_t(item.itemText)}
                            </span>
                        </Link>
                    ) : (
                        <button
                            className={styles["menu-item"]}
                            onClick={toggleDrawer(item.id)}
                        >
                            <DynamicReactIcon iconName={item.icon} />
                            <span className={styles["menu-item-text"]}>
                                {_t(item.itemText)}
                            </span>
                        </button>
                    )}
                    {item.children.length > 0 && (
                        <AdminPanelMenuItem
                            id={item.id}
                            toggledId={openItemId}
                            setOpenItemId={setOpenItemId}
                            items={item.children}
                        />
                    )}
                </div>
            ))}
        </nav>
    );
};

export default AdminPanelMenu;
