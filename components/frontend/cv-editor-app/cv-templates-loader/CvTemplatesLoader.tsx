"use client";
import React from "react";
import dynamic from "next/dynamic";

interface Props {
    templateId: string;
}

const TechVisionary = dynamic(
    () =>
        import(
            "@/components/frontend/cv-editor-app/cv-templates/tech-visionary/TechVisionary.tsx"
        ),
    { ssr: false },
);

const CvTemplatesLoader: React.FC<Props> = ({ templateId }) => {
    switch (templateId) {
        case "tech-visionary":
            return <TechVisionary />;
        default:
            return <TechVisionary />;
    }
};

export default CvTemplatesLoader;

/*
<PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
                Download now
            </PDFDownloadLink>
 */
