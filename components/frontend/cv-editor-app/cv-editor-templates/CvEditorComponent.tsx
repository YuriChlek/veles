"use client";

import React from "react";
import clsx from "clsx";
import EducationSection from "@/components/frontend/cv-editor-app/sections/education/EducationSection.tsx";
import styles from "./cv.editor.module.scss";
import PersonalInformationSection from "@/components/frontend/cv-editor-app/sections/personal-information/PersonalInformationSection.tsx";
import WorkExperienceSection from "@/components/frontend/cv-editor-app/sections/work-experiance/WorkExperienceSection.tsx";

const CvEditorComponent: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles["card-body"]}>
                <div
                    className={styles["tab-container"]}
                    dir="ltr"
                    data-orientation="horizontal"
                >
                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="trigger-edit"
                        id="content-edit"
                        className={clsx(styles["tab-content"], styles["active"])}
                    >
                        <PersonalInformationSection />
                        <EducationSection />
                        <WorkExperienceSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

//TechVisionary

export default CvEditorComponent;
