"use client";

import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as CiIcons from "react-icons/ci";
import * as GoIcons  from "react-icons/go";
import * as IoIcons  from "react-icons/io";
import styles from './font.icons.module.scss'
import {FontIconProps} from "@/interfaces/admin/font-icons/interfaces";
import clsx from "clsx";

const DynamicReactIcon: React.FC<FontIconProps> = ({ iconName, className }) => {
    const icon = iconName.trim();
    const IconComponent = AiIcons[icon as keyof typeof AiIcons]
        || CiIcons[icon as keyof typeof CiIcons]
        || GoIcons[icon as keyof typeof GoIcons]
        || IoIcons[icon as keyof typeof IoIcons];

    if (!IconComponent) {
        return <span>Icon is not founded</span>;
    }

    return <IconComponent className={clsx(styles['font-icon'], className)}/>;
};

export default DynamicReactIcon;
