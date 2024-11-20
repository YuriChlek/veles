"use client";

import React, { useEffect, useState } from "react";
import useVelesTranslation from "@/utils/translations/translation.ts";
import Button from "@/components/base/button-base/Button";
import styles from "@/components/admin/tabs-content/add-language/add.alnguage.module.scss";
import Select from "@/components/base/select/Select.tsx";
import defaultLanguages from "@/components/admin/tabs-content/add-language/defaultLanguages.ts";
import useLanguagesStore from "@/state/slices/languages.ts";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import { print } from "graphql/index";
import { SET_LANGUAGE_MUTATION } from "@/components/admin/tabs-content/add-language/set-language-mutation.graphql.ts";
import { AxiosResponse } from "axios";
import GraphqlRequest from "@/utils/graphql/GraphqlClient.ts";
import type { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import type { SetLanguageResponse } from "@/interfaces/admin/languages/interfaces.ts";
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";
import type { SelectOption } from "@/interfaces/admin/select/interfaces.ts";

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
            setDefaultFrontend(selectedLang.default_frontend_language as boolean);
            setDefaultAdmin(selectedLang.default_admin_language as boolean);
        }

        setSelectedValue(value);
        setSelectHasError(false);
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, checked } = event.target;
        const lang: LanguageType = { ...selectedLanguage };

        if (name === "default_frontend_language") {
            lang.default_frontend_language = checked;
            setDefaultFrontend(checked);
        }

        if (name === "default_admin_language") {
            lang.default_admin_language = checked;
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
                        default_frontend_language:
                            selectedLanguage.default_frontend_language,
                        default_admin_language: selectedLanguage.default_admin_language,
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

    return (
        <>
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
                        name="default_frontend_language"
                        type="checkbox"
                        onChange={inputHandler}
                        checked={defaultFrontend}
                    />
                    <span className={styles["add-language-input-label-title"]}>
                        {_t("Set as default for frontend")}
                    </span>
                </Label>
                <Label className={styles["add-language-input-label"]}>
                    <Input
                        name="default_admin_language"
                        type="checkbox"
                        onChange={inputHandler}
                        checked={defaultAdmin}
                    />
                    <span className={styles["add-language-input-label-title"]}>
                        {_t("Set as default for admin panel")}
                    </span>
                </Label>
            </div>
            <Button onClick={setLanguageHandler} blueColor={true}>
                {_t("Add Language")}
            </Button>
        </>
    );
};

export default AddLanguage;
