import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Your CV",
    description: "Step-by-step CV builder",
};

interface CVPageProps {
    params: {
        data: string[] | [] | undefined;
    };
}

const MakeCvBasePage: React.FC<CVPageProps> = ({ params }): React.JSX.Element => {
    console.log(params);
    return (
        <main>
            <h1>Cv Page base</h1>
        </main>
    );
};

export default MakeCvBasePage;
