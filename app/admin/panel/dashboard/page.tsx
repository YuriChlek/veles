import React from "react";
import useVelesTranslation from "@/utils/translations/translation.ts";

const Dashboard: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    return (
        <main className="admin-dashboard">
            <h2>Hello from admin {_t("Dashboard")}</h2>
        </main>
    );
};

export default Dashboard;
