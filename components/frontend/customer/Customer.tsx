"use client";

import React from "react";
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import IconButton from "@mui/material/IconButton";

const Customer: React.FC = () => {

    return (
        <div>
            <IconButton
                sx={{fontSize: "1.2rem"}}
            >
                <DynamicReactIcon iconName="GoPerson"/>
            </IconButton>
        </div>
    )
}

export default Customer;
