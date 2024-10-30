import React from "react";
import Link from 'next/link';
import _t from "@/utils/translations/translation";
import styles from "./customer.settings.link.module.scss"

export interface CustomerSettingsLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    adminName?: string;
}

const CustomerSettingsLink = React.forwardRef<HTMLAnchorElement, CustomerSettingsLinkProps>(
    ({ adminName }, ref) => {
        return (
            <Link className={styles["admin-settings-link"]} href="#" passHref ref={ref} >
                <span>{`${_t("Account Settings")} (${adminName})`}</span>
            </Link>
        );
    }
);

CustomerSettingsLink.displayName = "CustomerSettingsLink";

export default CustomerSettingsLink;
