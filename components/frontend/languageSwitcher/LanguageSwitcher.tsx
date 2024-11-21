"use client";

import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import DynamicReactIcon from "@/components/base/dynamic-react-icon/DynamicReactIcon.tsx";
import { setUserLocale } from "@/utils/translations/locale.ts";
import styles from "./language.switcher.module.scss";
import type { Locale } from "@/i18n/config.ts";
import useVelesTranslation from "@/utils/translations/translation.ts";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

interface LanguageSwitcherProps {
    locales: Array<LanguageType>;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ locales }) => {
    const _t = useVelesTranslation();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        console.log(locales);
    }, []);

    const handleChange = async (locale: Locale) => {
        await setUserLocale(locale);
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
                    {locales.map((item) => (
                        <MenuItem
                            key={item.language_code}
                            onClick={() => handleChange(item.language_code as Locale)}
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
                            {_t(item.language_view)}
                        </MenuItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default LanguageSwitcher;
