import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

const Button: React.FC = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, asChild = false, ...props}, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={clsx(styles['base-button'], className)}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export {Button};
