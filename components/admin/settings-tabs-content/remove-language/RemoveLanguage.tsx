import React from "react";
import { print } from "graphql/index";
import useVelesTranslation from "@/utils/translations/translation";
import { REMOVE_LANGUAGE_MUTATION } from "@/components/admin/settings-tabs-content/remove-language/remove-language-mutation.ts";
import styles from "./remove.language.module.scss";
import { AxiosResponse } from "axios";
import type { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import type {
    LanguageType,
    SetLanguageResponse,
} from "@/interfaces/admin/languages/interfaces.ts";
import GraphqlRequest from "@/utils/graphql/GraphqlClient.ts";
import useLanguagesStore from "@/state/slices/languages.ts";
import { RemoveLanguageResponse } from "@/interfaces/admin/languages/interfaces.ts";

type RemoveLanguageProps = {
    language_code: string;
    isDisable?: boolean
};

const RemoveLanguageButton: React.FC<RemoveLanguageProps> = ({ language_code, isDisable }) => {
    const _t = useVelesTranslation();
    const { setCurrentLanguages } = useLanguagesStore();

    const removeLanguageHandler = async () => {
        console.log(language_code)
        if (!language_code) {
            return;
        }

        try {
            const query = print(REMOVE_LANGUAGE_MUTATION);
            const response: AxiosResponse<
                GraphQLResponseInterface<Record<string, SetLanguageResponse | unknown>>
            > = await GraphqlRequest(
                {
                    query,
                    variables: { language_code },
                },
                "remove_language",
            );

            const data: Record<string, RemoveLanguageResponse> = response.data.data;

            if ("removeLanguage" in data && Array.isArray(data.removeLanguage)) {
                setCurrentLanguages(data.removeLanguage as Array<LanguageType>);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            className={styles["admin-remove-language"]}
            disabled={isDisable}
            onClick={removeLanguageHandler}
        >
            {_t("Remove")}
        </button>
    );
};

export default RemoveLanguageButton;
