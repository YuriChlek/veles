import React from "react";
import Image from "next/image";
import Link from "next/link";
import _t from "@/utils/translations/translation.ts";
import styles from "./logo.module.scss";

interface logoProps {
    width?: number | 50;
    height?: number | 50;
}

const Logo: React.FC = ({ width, height }: logoProps): React.JSX.Element => {
    const logoWidth = width || 50;
    const logoHeight = height || 50;

    return (
        <div className={styles["logo-wrapper"]}>
            <Link className={styles.logo} href="#">
                <Image src="/images/logo.png" width={logoWidth} height={logoHeight} alt={_t("Veles logo")} priority />
            </Link>
        </div>
    );
};

export default Logo;
