import React, { ChangeEvent } from "react";
import CvLoadImage from "@/components/frontend/cv-editor-app/cv-load-image/CvLoadImage.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import CvFormGroup from "@/components/frontend/cv-editor-app/sections/form-group/FormGroup.tsx";
import { CvDataState } from "@/state/interfaces/cvEditor/interfaces.ts";
import cvStore from "@/state/slices/cv.ts";
import styles from "../sections.module.scss";

const PersonalInformationSection: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    const { cvData, setCvField } = cvStore();

    const setCvDataHandler =
        (key: keyof CvDataState) =>
            (e: ChangeEvent<HTMLInputElement>) => {
                setCvField(key, e.target.value);
            };

    return (
        <section className={styles["form-section"]}>
            <h2 className={styles["section-title"]}>{_t("Personal Information")}</h2>
            <div className={styles["form-grid"]}>
                <CvLoadImage />
                <div className={styles["form-group-section-top"]}>
                    <div className={styles["form-group-section"]}>
                        <CvFormGroup
                            inputLabel={"Given name"}
                            inputValue={cvData.givenName}
                            inputHandler={setCvDataHandler("givenName")}
                        />
                        <CvFormGroup
                            inputLabel={"Family name"}
                            inputValue={cvData.familyName}
                            inputHandler={setCvDataHandler("familyName")}
                        />
                    </div>
                    <CvFormGroup
                        inputLabel={"Headline"}
                        inputValue={cvData.headline}
                        inputHandler={setCvDataHandler("headline")}
                    />
                </div>
            </div>
            <div className={styles["form-group-section"]}>
                <CvFormGroup
                    inputLabel={"Email"}
                    inputValue={cvData.email}
                    inputHandler={setCvDataHandler("email")}
                />
                <CvFormGroup
                    inputLabel={"Phone"}
                    inputValue={cvData.phoneNumber}
                    inputHandler={setCvDataHandler("phoneNumber")}
                />
            </div>
            <CvFormGroup
                inputLabel={"Location"}
                inputValue={cvData.location}
                inputHandler={setCvDataHandler("location")}
            />
            <CvFormGroup
                inputLabel={"Linkedin"}
                inputValue={cvData.linkedin}
                inputHandler={setCvDataHandler("linkedin")}
            />
        </section>
    );
};

export default PersonalInformationSection;
