import * as React from "react";
import clsx from 'clsx';
import styles from './input.module.scss'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={clsx(styles['control-input'], className)}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

export {Input};
