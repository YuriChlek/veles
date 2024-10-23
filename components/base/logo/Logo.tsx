import React from "react";
import clsx from 'clsx';
import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

interface logoProps {
    width?: number | 50,
    height?: number | 50
}

const Logo: React.FC = ({width, height}: logoProps): React.JSX.Element => {
    const logoWidth = width || 50;
    const logoHeight = height || 50;

    return (
        <div className={styles["logo-wrapper"]}>
            <Link className={styles.logo} href="#">
                <Image
                    src="/images/logo.png"
                    width={logoWidth}
                    height={logoHeight}
                    alt={__("Veles logo")}
                    priority
                />
            </Link>
        </div>
    )
}

export default Logo;
