"use client";

import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CiIcons from "react-icons/ci";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import styles from "./font.icons.module.scss";
import type { FontIconProps } from "@/interfaces/admin/font-icons/interfaces";
import clsx from "clsx";
import useVelesTranslation from "@/utils/translations/translation.ts";

const DynamicReactIcon: React.FC<FontIconProps> = ({
    iconName,
    className,
}): React.JSX.Element => {
    const _t = useVelesTranslation();
    const icon = iconName.trim();
    const IconComponent =
        AiIcons[icon as keyof typeof AiIcons] ||
        CiIcons[icon as keyof typeof CiIcons] ||
        GoIcons[icon as keyof typeof GoIcons] ||
        IoIcons[icon as keyof typeof IoIcons];

    if (!IconComponent) {
        return <span>{_t("Icon is not founded")}</span>;
    }

    return <IconComponent className={clsx(styles["font-icon"], className)} />;
};

export default DynamicReactIcon;
