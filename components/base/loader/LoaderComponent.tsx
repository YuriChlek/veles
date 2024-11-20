import { CircularProgress } from "@mui/material";
import styles from "./loader.component.module.scss";

const LoaderComponent = () => {
    return (
        <div className={styles["main-container"]}>
            <CircularProgress />
        </div>
    );
};

export default LoaderComponent;
