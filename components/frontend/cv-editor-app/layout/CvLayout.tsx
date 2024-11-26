import React from "react";
import CvEditorTemplatesLoader from "@/components/frontend/cv-editor-app/cv-editor-templates-loader/CvEditorTemplatesLoader.tsx";
import CvTemplatesLoader from "@/components/frontend/cv-editor-app/cv-templates-loader/CvTemplatesLoader.tsx";
import styles from "./cv.layout.module.scss";

interface CvLayoutProps {
    templateId: string;
}

const CvLayout: React.FC<CvLayoutProps> = ({templateId}): React.JSX.Element => {

    return (
        <div className={styles["cv-layout"]}>
            <CvEditorTemplatesLoader templateId={templateId} />
            <CvTemplatesLoader templateId={templateId} />
        </div>
    );
};

export default CvLayout;
