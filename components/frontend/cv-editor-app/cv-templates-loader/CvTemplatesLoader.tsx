import React from "react";
import dynamic from "next/dynamic";

interface Props {
    templateId: string;
}

const CvTemplatesLoader: React.FC<Props> = ({ templateId }): React.JSX.Element => {
    const DynamicCvComponent = dynamic(
        () =>
            import(
                `@/components/frontend/cv-editor-app/cv-templates/${templateId}/CvComponent.tsx`
            ),
        {
            ssr: false,
        },
    );

    return <DynamicCvComponent />;
};

export default CvTemplatesLoader;
