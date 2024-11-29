"use client";

import React from "react";
import CvLoadImage from "@/components/frontend/cv-editor-app/cv-load-image/CvLoadImage.tsx";
import clsx from "clsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import Input from "@/components/base/input/Input.tsx";
import Label from "@/components/base/label/Label.tsx";
import styles from "./cv.editor.module.scss";

const CvEditorComponent: React.FC = () => {
    const _t = useVelesTranslation();

    return (
        <div className={styles.card}>
            <div className={styles["card-body"]}>
                <div
                    className={styles["tab-container"]}
                    dir="ltr"
                    data-orientation="horizontal"
                >
                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="trigger-edit"
                        id="content-edit"
                        className={clsx(styles["tab-content"], styles["active"])}
                    >
                        <h2 className={styles["section-title"]}>
                            {_t("Personal Information")}
                        </h2>
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
                                        placeholder="john@example.com"
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
                                        placeholder="+1 (555) 123-4567"
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
                                    placeholder="New York, NY"
                                    type="text"
                                    name="location"
                                    className={styles["input"]}
                                />
                            </div>
                        </section>


                        <section className={styles["form-section"]}>
                            <h2 className="text-xl font-semibold">Work Experience</h2>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="company"
                                    >
                                        Company
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="company"
                                        placeholder="Company name"
                                        name="company"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="position"
                                    >
                                        Position
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="position"
                                        placeholder="Job title"
                                        name="position"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="startDate"
                                        >
                                            Start Date
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="startDate"
                                            placeholder="MM/YYYY"
                                            name="startDate"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="endDate"
                                        >
                                            End Date
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="endDate"
                                            placeholder="MM/YYYY or Present"
                                            name="endDate"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="description"
                                    >
                                        Job Description
                                    </label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="description"
                                        name="description"
                                        placeholder="Describe your responsibilities and achievements"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                >
                                    Add Work Experience
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
                <div className="actions">
                    <button className="btn primary">Download PDF</button>
                </div>
            </div>
        </div>
    );
};

//TechVisionary

export default CvEditorComponent;
