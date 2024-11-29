"use client";
import React from "react";
import CvTemplatesLoader from "@/components/frontend/cv-editor-app/cv-templates-loader/CvTemplatesLoader.tsx";
import CvEditorComponent
    from "@/components/frontend/cv-editor-app/cv-editor-templates/CvEditorComponent.tsx";
import styles from "./cv.layout.module.scss";

interface CvLayoutProps {
    templateId: string;
}

const CvLayout: React.FC<CvLayoutProps> = ({ templateId }): React.JSX.Element => {
    return (
        <div className={styles["cv-layout"]}>
            <div className={styles["cv-editor-column"]}>
                <CvEditorComponent />
            </div>
            <div className={styles["cv-editor-column"]}>
                <CvTemplatesLoader templateId={templateId} />
            </div>
        </div>
    );
};

export default CvLayout;
