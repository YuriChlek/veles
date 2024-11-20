import React from "react";
import Link from "next/link";
import styles from "./customer.settings.link.module.scss";
import useVelesTranslation from "@/utils/translations/translation";

export interface CustomerSettingsLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    adminName?: string;
}

const CustomerSettingsLink = React.forwardRef<
    HTMLAnchorElement,
    CustomerSettingsLinkProps
>(({ adminName }, ref) => {
    const _t = useVelesTranslation();

    return (
        <Link className={styles["admin-settings-link"]} href="#" passHref ref={ref}>
            <span>{`${_t("Account Settings")} (${adminName})`}</span>
        </Link>
    );
});

CustomerSettingsLink.displayName = "CustomerSettingsLink";

export default CustomerSettingsLink;
