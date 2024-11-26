import React from "react";

interface CVPageProps {
    params: {
        data: string[] | [] | undefined;
    };
}

const MakeCvBasePage: React.FC<CVPageProps> = ({ params }): React.JSX.Element => {
    console.log(params);
    return (
        <main>
            <h1>Cv Page with params</h1>
        </main>
    );
};

export default MakeCvBasePage;
