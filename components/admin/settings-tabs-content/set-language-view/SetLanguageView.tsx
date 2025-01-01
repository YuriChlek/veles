import React from "react";
import { print } from "graphql/index";
import { SET_LANGUAGE_VIEW_MUTATION } from "@/components/admin/settings-tabs-content/set-language-view/set-language-view-mutation.ts";
import { AxiosResponse } from "axios";
import type { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import GraphqlRequest from "@/utils/graphql/GraphqlClient.ts";
import useLanguagesStore from "@/state/slices/languages.ts";
import { SetLanguageViewResponse } from "@/interfaces/admin/languages/interfaces.ts";
import Input from "@/components/base/input/Input.tsx";

type SetLanguageViewProps = {
    view: "frontend_language" | "admin_language";
    lang: LanguageType;
};

const SetLanguageView: React.FC<SetLanguageViewProps> = ({
    view,
    lang,
}): React.JSX.Element => {
    const { customerLanguage, setCurrentLanguages } = useLanguagesStore();
    const setLanguageViewHandler = async () => {
        try {
            const query = print(SET_LANGUAGE_VIEW_MUTATION);
            const response: AxiosResponse<
                GraphQLResponseInterface<
                    Record<string, SetLanguageViewResponse | unknown>
                >
            > = await GraphqlRequest(
                {
                    query,
                    variables: {
                        view,
                        value: !lang[view],
                        language_code: lang.language_code,
                    },
                },
                "set_language_view",
            );

            const data: Record<string, SetLanguageViewResponse | unknown> =
                response.data.data;

            if ("setLanguageView" in data && Array.isArray(data.setLanguageView)) {
                setCurrentLanguages(data.setLanguageView as Array<LanguageType>);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Input
            type="checkbox"
            disabled={
                lang.language_code === customerLanguage && view === "admin_language"
            }
            checked={lang[view]}
            onChange={setLanguageViewHandler}
        />
    );
};

export default SetLanguageView;
