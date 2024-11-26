import React from "react";
import dynamic from "next/dynamic";
import styles from "./cv.templates.loader.module.scss";

interface Props {
    templateId: string;
}

const CvTemplatesLoader: React.FC<Props> = ({templateId}): React.JSX.Element => {
   const DynamicCvComponent = dynamic(
        () => import(`@/components/frontend/cv-editor-app/cv-templates/${templateId}/CvComponent.tsx`),
        {
            ssr: false,
        },
    );

    return (
        <div className={styles["cv-templates-loader"]}>
            <DynamicCvComponent />
        </div>
    )
}

export default CvTemplatesLoader;
