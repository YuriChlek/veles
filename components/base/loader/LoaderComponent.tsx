import React from "react";
import { CircularProgress } from "@mui/material";
import styles from "./loader.component.module.scss";

const LoaderComponent: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles["main-container"]}>
            <CircularProgress />
        </div>
    );
};

export default LoaderComponent;
