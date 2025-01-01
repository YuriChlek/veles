import React, { ChangeEvent } from "react";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import styles from "@/components/frontend/cv-editor-app/sections/sections.module.scss";
import useVelesTranslation from "@/utils/translations/translation.ts";

interface CvFormGroupProps {
    inputLabel: string;
    inputValue: string;
    inputHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CvFormGroup: React.FC<CvFormGroupProps> = (props: CvFormGroupProps) => {
    const _t = useVelesTranslation();
    const { inputLabel, inputValue, inputHandler } = props;

    const createInputProp: (label: string) => string = (label: string): string => {
        return label.replace(" ", "_").toLowerCase();
    };

    return (
        <div className={styles["form-group"]}>
            <Label htmlFor={createInputProp(inputLabel)} className={styles["label"]}>
                {_t(inputLabel)}
            </Label>
            <Input
                id={createInputProp(inputLabel)}
                type="text"
                name={createInputProp(inputLabel)}
                className={styles["input"]}
                value={inputValue}
                onChange={inputHandler}
            />
        </div>
    );
};

export default CvFormGroup;
