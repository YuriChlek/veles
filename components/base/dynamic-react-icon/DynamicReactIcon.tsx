"use client";

import React from 'react';
import * as AiIcons from 'react-icons/ai';
import styles from './font.icons.module.scss'
import {FontIconProps} from "@/interfaces/admin/font-icons/interfaces";

const DynamicReactIcon: React.FC<FontIconProps> = ({ iconName}) => {
    const icon = iconName.trim();
    const IconComponent = AiIcons[icon as keyof typeof AiIcons];

    if (!IconComponent) {
        return <span>Icon is not founded</span>;
    }

    return <IconComponent className={styles['admin-menu-font-icon']}/>;
};

export default DynamicReactIcon;
