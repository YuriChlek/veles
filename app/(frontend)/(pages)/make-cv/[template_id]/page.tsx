import React from "react";
import CvLayout from "@/components/frontend/cv-editor-app/layout/CvLayout.tsx";
import PageTitle from "@/components/base/page-title/PageTitle.tsx";

interface MakeCvProps {
    params: Promise<{
        template_id: string;
    }>;
}

const MakeCv: React.FC<MakeCvProps> = async (props): Promise<React.JSX.Element> => {
    const { template_id } = await props.params;
    const templateId = typeof template_id === "string" ? template_id : "";

    return (
        <main>
            <PageTitle pageTitle="Create Your CV" />
            <CvLayout templateId={templateId} />
        </main>
    );
};

export default MakeCv;
