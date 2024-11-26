"use client";

import React from "react";
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import IconButton from "@mui/material/IconButton";
import useVelesTranslation from "@/utils/translations/translation.ts";
import styles from "./customer.module.scss";

const Customer: React.FC = () => {
    const _t = useVelesTranslation();
    return (
        <div>
            <IconButton
                sx={{
                    fontSize: "1.2rem",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <DynamicReactIcon iconName="GoPerson" />
                <span className={styles.label}>{_t("Sing In")}</span>
            </IconButton>
        </div>
    );
};

export default Customer;
