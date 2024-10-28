"use client";

import React, {useState} from "react";
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import IconButton from "@mui/material/IconButton";

const Customer: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{fontSize: "1.2rem"}}
            >
                <DynamicReactIcon iconName="GoPerson"/>
            </IconButton>
        </div>
    )
}

export default Customer;
