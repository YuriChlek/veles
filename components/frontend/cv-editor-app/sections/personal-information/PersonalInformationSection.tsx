import React, { ChangeEvent } from "react";
import CvLoadImage from "@/components/frontend/cv-editor-app/cv-load-image/CvLoadImage.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import CvFormGroup from "@/components/frontend/cv-editor-app/sections/form-group/FormGroup.tsx";
import cvStore from "@/state/slices/cv.ts";
import styles from "../sections.module.scss";

const PersonalInformationSection: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    const {
        givenName,
        setGivenName,
        familyName,
        setFamilyName,
        headline,
        setHeadline,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        location,
        setLocation,
        linkedin,
        setLinkedin,
    } = cvStore();

    const setFirstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setGivenName(e.target.value);
    };

    const setLastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFamilyName(e.target.value);
    };

    const setHeadlineHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setHeadline(e.target.value);
    };

    const setPhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const setLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };

    const setLinkedinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLinkedin(e.target.value);
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
                            inputValue={givenName}
                            inputHandler={setFirstNameHandler}
                        />
                        <CvFormGroup
                            inputLabel={"Family name"}
                            inputValue={familyName}
                            inputHandler={setLastNameHandler}
                        />
                    </div>
                    <CvFormGroup
                        inputLabel={"Headline"}
                        inputValue={headline}
                        inputHandler={setHeadlineHandler}
                    />
                </div>
            </div>
            <div className={styles["form-group-section"]}>
                <CvFormGroup
                    inputLabel={"Email"}
                    inputValue={email}
                    inputHandler={setEmailHandler}
                />
                <CvFormGroup
                    inputLabel={"Phone"}
                    inputValue={phoneNumber}
                    inputHandler={setPhoneHandler}
                />
            </div>
            <CvFormGroup
                inputLabel={"Location"}
                inputValue={location}
                inputHandler={setLocationHandler}
            />
            <CvFormGroup
                inputLabel={"Linkedin"}
                inputValue={linkedin}
                inputHandler={setLinkedinHandler}
            />
        </section>
    );
};

export default PersonalInformationSection;
