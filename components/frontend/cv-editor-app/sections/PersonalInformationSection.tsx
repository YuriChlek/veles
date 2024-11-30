import React from "react";
import CvLoadImage from "@/components/frontend/cv-editor-app/cv-load-image/CvLoadImage.tsx";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import styles from "./sections.module.scss";

const PersonalInformationSection: React.FC = (): React.JSX.Element => {
    const _t = useVelesTranslation();
    return (
        <>
            <h2 className={styles["section-title"]}>{_t("Personal Information")}</h2>
            <section className={styles["form-section"]}>
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
                                />
                            </div>
                            <div className={styles["form-group"]}>
                                <Label htmlFor="family_name" className={styles["label"]}>
                                    {_t("Family name")}
                                </Label>
                                <Input
                                    id="family_name"
                                    type="email"
                                    name="email"
                                    className={styles["input"]}
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
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <Label htmlFor="phone" className={styles["label"]}>
                            Phone
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            name="phone"
                            className={styles["input"]}
                        />
                    </div>
                </div>
                <div className={styles["form-group"]}>
                    <Label htmlFor="location" className={styles["label"]}>
                        Location
                    </Label>
                    <Input
                        id="location"
                        type="text"
                        name="location"
                        className={styles["input"]}
                    />
                </div>
            </section>
        </>
    );
};

export default PersonalInformationSection;
