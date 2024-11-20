export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps {
    options: Array<SelectOption> | undefined;
    onChange?: (value: string) => void;
    value?: string | number;
    label?: string;
    className?: string;
    hasError?: boolean;
}
