"use client";

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AdminSettingsTabPanel from "@/components/admin/tabs-content/tab-panel/AdminSettingsTabPanel.tsx";
import AdminSettingsTabsConfig from "@/components/admin/tabs-content/admin-settings-tabs-config.ts";
import _t from "@/utils/translations/translation.ts";
import styles from "./admin.settings.tabs.module.scss";

const AdminSettingsTabs: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={styles["admin-settings-tabs"]}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={styles.tabs}
            >
                {AdminSettingsTabsConfig.map((item, index) => (
                    <Tab
                        label={_t(item.label)}
                        key={index}
                        id={`vertical-tab-${index}`}
                        aria-controls={`vertical-tabpanel-${index}`}
                        className={styles.tab}
                        sx={{
                            order: item.order,
                        }}
                    />
                ))}
            </Tabs>
            {AdminSettingsTabsConfig.map((item, index) => (
                <AdminSettingsTabPanel value={value} index={index} key={index}>
                    <item.component />
                </AdminSettingsTabPanel>
            ))}
        </Box>
    );
};

export default AdminSettingsTabs;
