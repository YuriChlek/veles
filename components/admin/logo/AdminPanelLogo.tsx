import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./admin.panel.logo.module.scss";

const AdminPanelLogo: React.FC = () => {
    return (
        <div className={styles["logo-wrapper"]}>
            <Link className={styles.logo} href="#">
                <Image
                    src="/images/logo.png"
                    width={50}
                    height={50}
                    alt="Veles admin panel logo"
                />
            </Link>
        </div>
    )
}

export default AdminPanelLogo;
