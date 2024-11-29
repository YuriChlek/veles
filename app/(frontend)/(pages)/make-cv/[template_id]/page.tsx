import React from "react";
import CvLayout from "@/components/frontend/cv-editor-app/layout/CvLayout.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";

interface MakeCvProps {
    params: {
        template_id: string;
    };
}

const MakeCv: React.FC<MakeCvProps> = ({ params }): React.JSX.Element => {
    const _t = useVelesTranslation();

    return (
        <main>
            <h1>{_t("Create Your CV")}</h1>
            <CvLayout templateId={params.template_id} />
        </main>
    );
};

export default MakeCv;
