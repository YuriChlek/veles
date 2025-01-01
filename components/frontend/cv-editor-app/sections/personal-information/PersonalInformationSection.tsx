import React, { ChangeEvent } from "react";
import CvLoadImage from "@/components/frontend/cv-editor-app/cv-load-image/CvLoadImage.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import CvFormGroup from "@/components/frontend/cv-editor-app/sections/form-group/FormGroup.tsx";
import cvStore from "@/state/slices/cv.ts";
import styles from "../sections.module.scss";

const PersonalInformationSection: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    const { cvData, setCvField } = cvStore();

    const setFirstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("givenName", e.target.value);
    };

    const setLastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("familyName", e.target.value);
    };

    const setHeadlineHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("headline", e.target.value);
    };

    const setPhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("phoneNumber", e.target.value);
    };

    const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("email", e.target.value);
    };

    const setLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("location", e.target.value);
    };

    const setLinkedinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCvField("linkedin", e.target.value);
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
                            inputHandler={setFirstNameHandler}
                        />
                        <CvFormGroup
                            inputLabel={"Family name"}
                            inputValue={cvData.familyName}
                            inputHandler={setLastNameHandler}
                        />
                    </div>
                    <CvFormGroup
                        inputLabel={"Headline"}
                        inputValue={cvData.headline}
                        inputHandler={setHeadlineHandler}
                    />
                </div>
            </div>
            <div className={styles["form-group-section"]}>
                <CvFormGroup
                    inputLabel={"Email"}
                    inputValue={cvData.email}
                    inputHandler={setEmailHandler}
                />
                <CvFormGroup
                    inputLabel={"Phone"}
                    inputValue={cvData.phoneNumber}
                    inputHandler={setPhoneHandler}
                />
            </div>
            <CvFormGroup
                inputLabel={"Location"}
                inputValue={cvData.location}
                inputHandler={setLocationHandler}
            />
            <CvFormGroup
                inputLabel={"Linkedin"}
                inputValue={cvData.linkedin}
                inputHandler={setLinkedinHandler}
            />
        </section>
    );
};

export default PersonalInformationSection;
