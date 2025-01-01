import React from "react";
import type { Metadata } from "next";
import useVelesTranslation from "@/utils/translations/translation.ts";

export const metadata: Metadata = {
    title: "Create Your CV",
    description: "Step-by-step CV builder",
};

const MakeCvBasePage: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();

    return (
        <main>
            <h1>{_t("Create Your CV")}</h1>
        </main>
    );
};

export default MakeCvBasePage;
