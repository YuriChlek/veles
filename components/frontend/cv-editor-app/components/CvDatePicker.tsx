import { DatePicker, PickersLayoutContentWrapper } from "@mui/x-date-pickers";
import React from "react";

const CvDatePicker: React.FC = (): React.JSX.Element => {
    return (
        <PickersLayoutContentWrapper>
            <DatePicker
                openTo="month"
                views={["year", "month"]}
                slotProps={{
                    textField: {
                        sx: {
                            height: 40,
                            "& .MuiInputBase-root": {
                                height: 40,
                                fontSize: "1.4rem",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #ccc !important",
                            },
                            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #007bff !important",
                            },
                        },
                    },

                    popper: {
                        sx: {
                            "& .MuiPickersMonth-monthButton": {
                                fontSize: "1.4rem",
                            },
                            "& .MuiPickersYear-yearButton": {
                                fontSize: "1.4rem",
                            },
                            "& .MuiPickersCalendarHeader-label": {
                                fontSize: "1.4rem",
                            },
                        },
                    },
                }}
            />
        </PickersLayoutContentWrapper>
    );
};

export default CvDatePicker;
