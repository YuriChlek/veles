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
import clsx from "clsx";

interface LanguageSwitcherProps {
    locales: Array<LanguageType>;
    userLocale: Locale;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    locales,
    userLocale,
}): React.JSX.Element => {
    const _t = useVelesTranslation();
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>("");

    const handleChange = async (locale: Locale): Promise<void> => {
        await setUserLocale(locale);
        setSelectedLanguageCode(locale);
        setDrawerOpen(false);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    useEffect(() => {
        setSelectedLanguageCode(userLocale);
    }, []);

    return (
        <div>
            <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                    fontSize: "1.2rem",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <DynamicReactIcon iconName="GoGlobe" />
                <span className={styles.label}>{_t("Language")}</span>
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
                            className={clsx({
                                [styles.active]:
                                    item.language_code === selectedLanguageCode,
                            })}
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
