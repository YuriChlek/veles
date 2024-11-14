"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Drawer, List, ListItem } from "@mui/material";
import type {
    AdminMenuItem,
    AdminMenuItemProps,
} from "@/interfaces/admin/menu/adminMenu";
import _t from "@/utils/translations/translation.ts";
import styles from "./admin.panel.menu.module.scss";

const AdminPanelMenuItem: React.FC<AdminMenuItemProps> = ({
    id,
    toggledId,
    items,
    setOpenItemId,
}) => {
    const [open, setOpen] = useState(false);

    const closeDrawer = (open: boolean) => () => {
        setOpen(open);

        if (!open) {
            setOpenItemId("");
        }
    };

    useEffect(() => {
        const isOpened = id === toggledId;
        setOpen(isOpened);
    }, [toggledId]);

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={closeDrawer(false)}
            classes={{ paper: styles["drawer-paper"] }}
        >
            <List>
                {items.map((item: AdminMenuItem, index: number) => (
                    <ListItem key={`${index}_${item.id}`}>
                        <Link onClick={closeDrawer(false)} href={item.linkHref}>
                            {_t(item.itemText)}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default AdminPanelMenuItem;
