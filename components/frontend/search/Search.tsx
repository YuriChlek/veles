"use client";

import React, {useState} from "react";
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import IconButton from "@mui/material/IconButton";

const Search: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{fontSize: "1.2rem"}}
            >
                <DynamicReactIcon iconName="GoSearch"/>
            </IconButton>
        </div>
    )
}

export default Search;
