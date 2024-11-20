import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import _t from "@/utils/translations/translation.ts";
import { SelectProps } from "@/interfaces/admin/select/interfaces.ts";
import styles from "./select.module.scss";

const Select: React.FC<SelectProps> = ({
    options,
    onChange,
    value,
    label,
    className,
    hasError,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent): void => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue: string): void => {
        setIsOpen(false);
        if (onChange) onChange(optionValue);
    };

    return (
        <div ref={selectRef} className={clsx(styles["select-wrapper"], className)}>
            {label && (
                <label
                    className={clsx(styles.label, {
                        [styles["label-active"]]: !!value || isOpen,
                    })}
                >
                    {_t(label)}
                </label>
            )}
            <div
                className={clsx(styles.selected, {
                    [styles["selected-active"]]: isOpen,
                    [styles["select-error"]]: hasError && !(!!value || isOpen),
                })}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {value &&
                    options &&
                    options.find((option) => option.value === value)?.label}
            </div>
            {isOpen && (
                <ul className={styles.dropdown}>
                    {options &&
                        options.map((option) => (
                            <li
                                key={option.value}
                                className={clsx(styles.option, {
                                    [styles.selectedOption]: option.value === value,
                                })}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

Select.displayName = "Label";

export default Select;
