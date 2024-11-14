"use client";

import React from "react";
import Button from "../button-base/Button.tsx";
import { useFormStatus } from "react-dom";
import type { ButtonProps } from "../button-base/Button.tsx";

export interface SubmitButtonProps extends ButtonProps {
    pendingText?: string;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
    ({
         children,
         pendingText = "Submitting...",
         ...props
     }, ref) => {
        const {pending} = useFormStatus();

        return (
            <Button type="submit" aria-disabled={pending} ref={ref} {...props}>
                {pending ? pendingText : children}
            </Button>
        );
    });

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
