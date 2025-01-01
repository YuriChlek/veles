import React from "react";
import useVelesTranslation from "@/utils/translations/translation.ts";

interface PageTitleProps {
    pageTitle: string;
    className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, className }) => {
    const _t = useVelesTranslation();

    return <h1 className={className}>{_t(pageTitle)}</h1>;
};

export default PageTitle;
