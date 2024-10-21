import * as React from "react";
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

const Button: React.FC = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, ...props}, ref) => {
        return (
            <button
                className={clsx(styles['base-button'], className)}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button };
