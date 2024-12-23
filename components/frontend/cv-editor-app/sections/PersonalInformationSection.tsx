import React, { ChangeEvent } from "react";
import CvLoadImage from "@/components/frontend/cv-editor-app/cv-load-image/CvLoadImage.tsx";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import cvStore from "@/state/slices/cv.ts";
import styles from "./sections.module.scss";

const PersonalInformationSection: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
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
        setFirstName(e.target.value);
    };

    const setLastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
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
                        <div className={styles["form-group"]}>
                            <Label htmlFor="name" className={styles["label"]}>
                                {_t("Given name")}
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                className={styles["input"]}
                                value={firstName}
                                onChange={setFirstNameHandler}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <Label htmlFor="family_name" className={styles["label"]}>
                                {_t("Family name")}
                            </Label>
                            <Input
                                id="family_name"
                                type="text"
                                name="family_name"
                                className={styles["input"]}
                                value={lastName}
                                onChange={setLastNameHandler}
                            />
                        </div>
                    </div>
                    <div className={styles["form-group"]}>
                        <Label htmlFor="headline" className={styles["label"]}>
                            {_t("Headline")}
                        </Label>
                        <Input
                            id="headline"
                            type="text"
                            name="headline"
                            className={styles["input"]}
                            value={headline}
                            onChange={setHeadlineHandler}
                        />
                    </div>
                </div>
            </div>
            <div className={styles["form-group-section"]}>
                <div className={styles["form-group"]}>
                    <Label htmlFor="email" className={styles["label"]}>
                        {_t("Email")}
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        className={styles["input"]}
                        value={email}
                        onChange={setEmailHandler}
                    />
                </div>
                <div className={styles["form-group"]}>
                    <Label htmlFor="phone" className={styles["label"]}>
                        {_t("Phone")}
                    </Label>
                    <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        className={styles["input"]}
                        value={phoneNumber}
                        onChange={setPhoneHandler}
                    />
                </div>
            </div>
            <div className={styles["form-group"]}>
                <Label htmlFor="location" className={styles["label"]}>
                    {_t("Location")}
                </Label>
                <Input
                    id="location"
                    type="text"
                    name="location"
                    className={styles["input"]}
                    value={location}
                    onChange={setLocationHandler}
                />
            </div>
            <div className={styles["form-group"]}>
                <Label htmlFor="linkedin" className={styles["label"]}>
                    {_t("Linkedin")}
                </Label>
                <Input
                    id="linkedin"
                    type="text"
                    name="linkedin"
                    className={styles["input"]}
                    value={linkedin}
                    onChange={setLinkedinHandler}
                />
            </div>
        </section>
    );
};

export default PersonalInformationSection;
