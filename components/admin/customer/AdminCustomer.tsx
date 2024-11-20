"use client";

import React, { useEffect, useState, useRef } from "react";
import useAdminUserStore from "@/state/slices/adminUser";
import AdminLogout from "@/components/admin/logout/AdminLogout.tsx";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon.tsx";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Stack from "@mui/material/Stack";
import CustomerSettingsLink from "@/components/admin/customer-settings-link/CustomerSettingsLink.tsx";
import styles from "./admin.customer.module.scss";

const AdminCustomer: React.FC = () => {
    const { adminUser, getAdminUser } = useAdminUserStore();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!adminUser.login) {
            getAdminUser();
        }
    }, [adminUser.login, getAdminUser]);

    const handleToggle = () => setOpen((prevOpen) => !prevOpen);

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    };

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={{
                        color: "#171717",
                        zIndex: open ? 1301 : 1,
                        borderBottomLeftRadius: open ? 0 : "4px",
                        borderBottomRightRadius: open ? 0 : "4px",
                        backgroundColor: "#FFFFFF",
                        position: "relative",
                        boxShadow: open
                            ? "0px -2px 5px rgba(0, 0, 0, 0.1), 2px 0px 5px rgba(0, 0, 0, 0.1), -2px 0px 5px rgba(0, 0, 0, 0.1)"
                            : "none",
                        "&:before": {
                            content: "''",
                            position: "absolute",
                            bottom: "-3px",
                            left: "-10px",
                            right: 0,
                            height: "7px",
                            backgroundColor: "#FFFFFF",
                            display: open ? "block" : "none",
                        },
                    }}
                >
                    <span className={styles["admin-customer"]}>
                        <span className={styles["admin-customer-article"]}>
                            {adminUser.login}
                        </span>
                        <DynamicReactIcon iconName={"GoPersonFill"} />
                    </span>
                </Button>
                <Menu
                    open={open}
                    anchorEl={anchorRef.current}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    className={styles["admin-menu-paper"]}
                >
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                            <MenuItem className={styles["admin-customer-item"]}>
                                <CustomerSettingsLink adminName={adminUser.login} />
                            </MenuItem>
                            <MenuItem className={styles["admin-customer-item"]}>
                                <AdminLogout />
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Menu>
            </Stack>
        </>
    );
};

export default AdminCustomer;
