"use client";

import React, {useEffect} from "react";
import useAdminUserStore from "@/state/slices/adminUser";
import AdminLogout from "@/components/admin/logout/AdminLogout.tsx";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon.tsx";
import styles from "./admin.customer.module.scss"
import Menu from "@mui/material/Menu"
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import _t from "@/utils/translations/translation.ts";

const AdminCustomer: React.FC = () => {
    const {adminUser, getAdminUser} = useAdminUserStore();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!adminUser.login) {
            getAdminUser();
        }
    }, [])

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return (
        <div className={styles["admin-customer-wrapper"]}>
            <Stack direction="row" spacing={2}>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className={clsx(styles["admin-customer-button"], { [styles.open]: open })}
                >
                    <div className={styles["admin-customer"]}>
                        <span className={styles["admin-customer-article"]}>
                            {adminUser.login}
                        </span>
                        <DynamicReactIcon iconName={"GoPersonFill"}/>
                    </div>
                </Button>
                <Menu
                    open={open}
                    anchorEl={anchorRef.current}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    classes={{ paper: styles["admin-menu-paper"] }}
                >
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                            <MenuItem className={styles["admin-customer-item"]}>
                                <span>
                                    {`${_t("Account Settings")} (${adminUser.login})`}
                                </span>
                            </MenuItem>
                            <MenuItem className={styles["admin-customer-item"]}>
                                <AdminLogout/>
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Menu>
            </Stack>
        </div>
    )
}

export default AdminCustomer;
