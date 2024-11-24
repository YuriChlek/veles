import React from "react";
import Box from "@mui/material/Box";
import styles from "./admin.settings.tab.panel.module.scss";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number | string;
    value: number | string;
    key?: number | string;
}

const AdminSettingsTabPanel: React.FC<TabPanelProps> = (props) => {
    const { children, value, index, ...attributes } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...attributes}
            className={styles["admin-tab-content"]}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

export default AdminSettingsTabPanel;
