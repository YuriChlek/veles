import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Your CV",
    description: "Step-by-step CV builder",
};

interface CVPageProps {
    params: Promise<{
        cv_id: string;
    }>;
}

const MakeCvBasePage: React.FC<CVPageProps> = async (
    props,
): Promise<React.JSX.Element> => {
    const params = await props.params;
    console.log(params);
    return (
        <main>
            <h1>Cv Page base</h1>
        </main>
    );
};

export default MakeCvBasePage;
