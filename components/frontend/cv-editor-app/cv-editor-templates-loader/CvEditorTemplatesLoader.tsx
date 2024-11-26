import React from "react";
import dynamic from "next/dynamic";
import styles from "./cv.editor.templates.loader.module.scss"

interface Props {
    templateId: string;
}

const CvEditorTemplatesLoader: React.FC<Props> = ({templateId}): React.JSX.Element => {
    const DynamicCvEditorComponent = dynamic(
        () => import(`@/components/frontend/cv-editor-app/cv-editor-templates/${templateId}/CvEditorComponent.tsx`),
        {
            ssr: false,
        },
    );

    return (
        <div className={styles["cv-editor-templates-loader"]}>
            <DynamicCvEditorComponent />
        </div>
    )
}

export default CvEditorTemplatesLoader
