"use client";

import {Button} from "../button-base/button";
import React, {type ComponentProps} from "react";
import {useFormStatus} from "react-dom";

type Props = ComponentProps<typeof Button> & {
    pendingText?: string;
};

const SubmitButton: React.FC = ({
                                    children,
                                    pendingText = "Submitting...",
                                    ...props
                                }: Props) => {
    const {pending} = useFormStatus();

    return (
        <Button type="submit" aria-disabled={pending} {...props}>
            {pending ? pendingText : children}
        </Button>
    );
}

export default SubmitButton;
