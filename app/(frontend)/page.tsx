import React from "react";
import useVelesTranslation from "@/utils/translations/translation.ts";

const Home = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    return (
        <main>
            <h2>Home page</h2>
            <h2>Translation test: {_t("Message by english")}</h2>
        </main>
    );
};

export default Home;
