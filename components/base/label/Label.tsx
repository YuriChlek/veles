"use client";

import * as React from "react";
import clsx from "clsx";
import styles from "./label.module.scss";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => (
        <label className={clsx(styles["control-label"], className)} {...props} ref={ref}>
            {props.children}
        </label>
    ),
);

Label.displayName = "Label";

export default Label;
