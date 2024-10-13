import * as React from "react";
import clsx from 'clsx';
import styles from './input.module.scss'
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        let [inputType ,setInputType] = useState(type);

        const showPass = () => {
            setInputType(() => {
                if (inputType === 'password') {
                    return 'text';
                }

                return type;
            });
        }

        return (
            <div className={styles['control-wrapper']}>
                <input
                    type={inputType}
                    className={clsx(styles['control-input'], className)}
                    datatype={type}
                    {...props}
                />
                {
                    type === 'password' && (
                        <button onClick={showPass} className={styles['control-show_pass']} type="button">
                            {
                                inputType === 'password' ? <IoEyeOutline className={styles['control-icon']} /> :
                                <IoEyeOffOutline className={styles['control-icon']} />
                            }
                        </button>
                    )
                }
            </div>
        );
    },
);

Input.displayName = "Input";

export {Input};
