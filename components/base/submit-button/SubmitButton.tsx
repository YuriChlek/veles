"use client";

import React from "react";
import Button from "../button-base/Button.tsx";
import type { ButtonProps } from "../button-base/Button.tsx";

export interface SubmitButtonProps extends ButtonProps {
    pendingText?: string;
    children: React.ReactNode | string;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
    ({ children, ...props }, ref): React.JSX.Element => {
        return (
            <Button type="submit" ref={ref} {...props}>
                {children}
            </Button>
        );
    },
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
