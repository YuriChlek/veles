"use client";

import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon.tsx";
import { setUserLocale, getUserLocale } from "@/utils/translations/locale.ts";
import styles from "./language.switcher.module.scss";
import type { Locale } from "@/i18n/config.ts";
import useVelesTranslation from "@/utils/translations/translation.ts";

const locales = {
    en: { label: "English" },
    de: { label: "German" },
};

const LanguageSwitcher: React.FC = () => {
    const _t = useVelesTranslation();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        try {
            getUserLocale();
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleChange = (locale: Locale) => {
        setUserLocale(locale);
        setDrawerOpen(false);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <div>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ fontSize: "1.2rem" }}>
                <DynamicReactIcon iconName="GoGlobe" />
            </IconButton>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <div className={styles["language-switcher-close"]}>
                    <IconButton
                        onClick={closeDrawer}
                        sx={{ width: "30px", height: "30px", padding: 0 }}
                    >
                        <DynamicReactIcon iconName="IoMdClose" />
                    </IconButton>
                </div>
                <List sx={{ width: 250, padding: 2 }}>
                    {Object.keys(locales).map((key) => (
                        <MenuItem
                            key={key}
                            onClick={() => handleChange(key as Locale)}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                "&.MuiMenuItem-root": {
                                    fontSize: "1.4rem",
                                    textTransform: "uppercase",
                                },
                            }}
                        >
                            {_t(locales[key as keyof typeof locales].label)}
                        </MenuItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default LanguageSwitcher;
