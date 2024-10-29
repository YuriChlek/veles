"use client";

import * as React from "react";
import clsx from 'clsx';
import styles from './label.module.scss';

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(({ className, ...props }, ref) => (
    <label
        className={clsx(styles['control-label'], className)}
        {...props}
        ref={ref}
    >
      {props.children}
    </label>
));

export default Label;