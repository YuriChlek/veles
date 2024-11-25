"use client";

import React, { useEffect, useState } from "react";
import useVelesTranslation from "@/utils/translations/translation.ts";
import Button from "@/components/base/button-base/Button";
import styles from "../add-language/add.alnguage.module.scss";
import Select from "@/components/base/select/Select.tsx";
import defaultLanguages from "../add-language/defaultLanguages.ts";
import useLanguagesStore from "@/state/slices/languages.ts";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import { print } from "graphql/index";
import { SET_LANGUAGE_MUTATION } from "../add-language/set-language-mutation.graphql.ts";
import { AxiosResponse } from "axios";
import GraphqlRequest from "@/utils/graphql/GraphqlClient.ts";
import type { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import type { SetLanguageResponse } from "@/interfaces/admin/languages/interfaces.ts";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import type { SelectOption } from "@/interfaces/admin/select/interfaces.ts";
import Row from "@/components/admin/settings-row/SettingsRow.tsx"

const AddLanguage: React.FC = () => {
    const _t = useVelesTranslation();
    const [selectedValue, setSelectedValue] = useState<string | undefined>();
    const [selectOptions, setSelectOptions] = useState<Array<SelectOption>>([]);
    const [selectHasError, setSelectHasError] = useState<boolean>(false);
    const [defaultAdmin, setDefaultAdmin] = useState<boolean>(false);
    const [defaultFrontend, setDefaultFrontend] = useState<boolean>(false);

    const {
        currentLanguages,
        selectedLanguage,
        setSelectedLanguage,
        setCurrentLanguages,
    } = useLanguagesStore();

    const selectHandler = (value: string): void => {
        const selectedLang: LanguageType | undefined = defaultLanguages.find(
            (lang) => lang.language_code === value,
        );

        if (selectedLang) {
            setSelectedLanguage(selectedLang);
            setDefaultFrontend(selectedLang.frontend_language as boolean);
            setDefaultAdmin(selectedLang.admin_language as boolean);
        }

        setSelectedValue(value);
        setSelectHasError(false);
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, checked } = event.target;
        const lang: LanguageType = { ...selectedLanguage };

        if (name === "frontend_language") {
            lang.frontend_language = checked;
            setDefaultFrontend(checked);
        }

        if (name === "admin_language") {
            lang.admin_language = checked;
            setDefaultAdmin(checked);
        }

        setSelectedLanguage(lang);
    };

    const setLanguageHandler = async () => {
        if (!selectedLanguage.language_code || !selectedLanguage.language_view) {
            setSelectHasError(true);
            return;
        }

        try {
            const query = print(SET_LANGUAGE_MUTATION);
            const response: AxiosResponse<
                GraphQLResponseInterface<Record<string, SetLanguageResponse | unknown>>
            > = await GraphqlRequest(
                {
                    query,
                    variables: {
                        language_view: selectedLanguage.language_view,
                        language_code: selectedLanguage.language_code,
                        frontend_language: selectedLanguage.frontend_language,
                        admin_language: selectedLanguage.admin_language,
                    },
                },
                "set_language",
            );

            const data: Record<string, SetLanguageResponse | unknown> =
                response.data.data;

            if ("setLanguage" in data && Array.isArray(data.setLanguage)) {
                setCurrentLanguages(data.setLanguage as Array<LanguageType>);
                resetData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const resetData = () => {
        setDefaultFrontend(false);
        setDefaultAdmin(false);
        setSelectedValue(undefined);
        setSelectedLanguage({
            language_view: "",
            language_code: "",
        } as LanguageType);
    };

    const createSwitcherData = () => {
        const switcherLang = defaultLanguages.filter(
            (lang) =>
                !(currentLanguages || []).some(
                    (lang_2) => lang.language_code === lang_2.language_code,
                ),
        );

        const options = switcherLang.map((language) => ({
            label: language.language_view,
            value: language.language_code,
        }));

        setSelectOptions(options);
    };

    useEffect(() => {
        createSwitcherData();
    }, [currentLanguages]);

    if (selectOptions.length) {
        return (
            <>
                <h2 className={styles["admin-languages-article"]}>{_t("Add language")}</h2>
                <div className={styles["add-language-wrapper"]}>
                    <Select
                        options={selectOptions}
                        onChange={selectHandler}
                        value={selectedValue}
                        label={_t("Choose language")}
                        hasError={selectHasError}
                    />
                    <Label className={styles["add-language-input-label"]}>
                        <Input
                            name="frontend_language"
                            type="checkbox"
                            onChange={inputHandler}
                            checked={defaultFrontend}
                        />
                        <span className={styles["add-language-input-label-title"]}>
                            {_t("Add to frontend")}
                        </span>
                    </Label>
                    <Label className={styles["add-language-input-label"]}>
                        <Input
                            name="admin_language"
                            type="checkbox"
                            onChange={inputHandler}
                            checked={defaultAdmin}
                        />
                        <span className={styles["add-language-input-label-title"]}>
                            {_t("Add to admin panel")}
                        </span>
                    </Label>
                </div>
                <Button onClick={setLanguageHandler} blueColor={true}>
                    {_t("Add Language")}
                </Button>
            </>
        );
    }
};

export default AddLanguage;
