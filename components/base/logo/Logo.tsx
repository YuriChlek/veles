import React from "react";
import Image from "next/image";
import Link from "next/link";
import useVelesTranslation from "@/utils/translations/translation.ts";
import {
    NEXT_PUBLIC_FRONTEND_HOST,
    NEXT_PUBLIC_FRONTEND_PORT,
} from "@/constants/env/env_constants.ts";
import { ADMIN_AREA, FRONTEND_AREA } from "@/constants/locales/locales_constants.ts";
import clsx from "clsx";
import styles from "./logo.module.scss";

interface logoProps {
    width?: number | 50;
    height?: number | 50;
    href?: string;
    area: typeof ADMIN_AREA | typeof FRONTEND_AREA;
}

const Logo: React.FC<logoProps> = ({ width, height, href, area }): React.JSX.Element => {
    const _t = useVelesTranslation();
    const logoWidth = width || 50;
    const logoHeight = height || 50;
    const logoHref = href || "/";
    const url = `${NEXT_PUBLIC_FRONTEND_HOST}:${NEXT_PUBLIC_FRONTEND_PORT}${logoHref}`;

    return (
        <div className={styles["logo-wrapper"]}>
            <Link
                className={clsx(
                    styles.logo,
                    { [styles["logo-admin-panel"]]: area === ADMIN_AREA },
                    { [styles["logo-frontend"]]: area === FRONTEND_AREA },
                )}
                href={url}
            >
                <Image
                    className={styles["logo-image"]}
                    src="/images/logo.png"
                    width={logoWidth}
                    height={logoHeight}
                    alt={_t("Veles")}
                    priority
                />
                {area === FRONTEND_AREA && (
                    <div className={styles["logo-title-wrapper"]}>
                        <p className={styles["logo-title"]}>Veles</p>
                        <span className={styles["logo-subtitle"]}>
                            {_t("CV builder")}
                        </span>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default Logo;
