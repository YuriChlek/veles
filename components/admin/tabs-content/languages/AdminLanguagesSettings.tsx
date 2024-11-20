"use client";

import React, { useEffect } from "react";
import useLanguagesStore from "@/state/slices/languages.ts";
import _t from "@/utils/translations/translation.ts";
import AddLanguage from "@/components/admin/tabs-content/add-language/AddLanguage.tsx";
import LanguagesTable from "@/components/admin/tabs-content/languages-table/LanguagesTable.tsx";
import styles from "./admin.languages.settings.module.scss";
import { print } from "graphql/index";
import { GET_LANGUAGES_QUERY } from "@/components/admin/tabs-content/languages/get-languages-query.graphql.ts";
import { AxiosResponse } from "axios";
import { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import GraphqlRequest from "@/utils/graphql/GraphqlClient.ts";
import { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import useSWR from "swr";

const query = print(GET_LANGUAGES_QUERY);
const fetcher = async () => {
    try {
        const response: AxiosResponse<GraphQLResponseInterface<Record<string, unknown>>> =
            await GraphqlRequest({ query }, "get_languages");

        const languagesData = response.data.data as {
            languages: Array<LanguageType>;
        };

        return languagesData.languages;
    } catch (error) {
        console.error("Error fetching languages:", error);
        return [];
    }
};

const AdminLanguagesSettings: React.FC = () => {
    const { currentLanguages, setCurrentLanguages } = useLanguagesStore();
    const { data, error } = useSWR("get_languages", fetcher);

    useEffect(() => {
        if (data && !currentLanguages.length) {
            setCurrentLanguages(data);
        }
    }, [currentLanguages, data]);

    if (error) {
        return (
            <div className={styles["admin-languages-settings-row"]}>
                <p>{_t("Error loading languages.")}</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles["admin-languages-settings-row"]}>
                <h2 className={styles["admin-languages-article"]}>
                    {_t("Add Languages")}
                </h2>
                <AddLanguage />
            </div>
            <div className={styles["admin-languages-settings-row"]}>
                <h2 className={styles["admin-languages-article"]}>
                    {_t("Edit Languages view")}
                </h2>
                {currentLanguages.length > 0 && (
                    <LanguagesTable rows={currentLanguages} />
                )}
            </div>
        </>
    );
};

export default AdminLanguagesSettings;
