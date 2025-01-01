import React from "react";
import useVelesTranslation from "@/utils/translations/translation.ts";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | Veles CV Builder",
};

const Dashboard: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();

    return (
        <main>
            <h1>{_t("Dashboard")}</h1>
        </main>
    );
};

export default Dashboard;
