"use client";

import React from "react";
import styles from "./sections.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import CvDatePicker from "@/components/frontend/cv-editor-app/components/CvDatePicker.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import useVelesTranslation from "@/utils/translations/translation.ts";
import dynamic from "next/dynamic";

const TextEditor = dynamic(
    () => import("@/components/frontend/text-editor/TextEditor.tsx"),
    {
        ssr: false,
    },
);

const WorkExperienceSection: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    return (
        <section className={styles["form-section"]}>
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <div className={styles["form-group"]}>
                <Label className={styles["label"]} htmlFor="position">
                    {_t("Position")}
                </Label>
                <Input
                    className={styles["input"]}
                    id="position"
                    type="text"
                    name="position"
                />
            </div>
            <div className={styles["form-group-section"]}>
                <div className={styles["form-group"]}>
                    <Label className={styles["label"]} htmlFor="employer">
                        {_t("Employer")}
                    </Label>
                    <Input
                        className={styles["input"]}
                        id="employer"
                        type="text"
                        name="employer"
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className={styles["form-group-section"]}>
                        <div className={styles["form-group"]}>
                            <Label className={styles["label"]}>{_t("Start date")}</Label>
                            <CvDatePicker />
                        </div>
                        <div className={styles["form-group"]}>
                            <Label className={styles["label"]}>{_t("End date")}</Label>
                            <CvDatePicker />
                        </div>
                    </div>
                </LocalizationProvider>
            </div>
            <div className={styles["form-group"]}>
                <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="description"
                >
                    {_t("Job Description")}
                </label>
                <TextEditor />
            </div>
            <button type="submit">Add Work Experience</button>
        </section>
    );
};

export default WorkExperienceSection;
