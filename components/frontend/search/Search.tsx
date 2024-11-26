"use client";

import React from "react";
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import IconButton from "@mui/material/IconButton";

const Search: React.FC = () => {
    return (
        <div>
            <IconButton
                sx={{
                    fontSize: "1.2rem",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <DynamicReactIcon iconName="GoSearch" />
            </IconButton>
        </div>
    );
};

export default Search;
