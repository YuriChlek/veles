import * as React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    blueColor?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, blueColor, ...props }, ref) => {
    return <button className={clsx(styles["base-button"], blueColor ? styles["base-button-blue"] : styles["base-button-black"], className)} ref={ref} {...props} />;
});

Button.displayName = "Button";

export default Button;
