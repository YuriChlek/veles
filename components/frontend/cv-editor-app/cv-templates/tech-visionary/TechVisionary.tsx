"use client";

import React, { useEffect, useRef } from "react";
import svg_pages from "@/utils/cv_factory/create_page.ts";
import cvStore from "@/state/slices/cv.ts";
import styles from "./CvMaker.module.scss";
import { Selection } from "d3";

export default function TechVisionary() {
    const {
        photo,
        firstName,
        lastName,
        headline,
        email,
        phoneNumber,
        location,
        linkedin,
    } = cvStore();
    const cvWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        generateCvTemplate();
    }, [firstName, photo, lastName, headline, email, phoneNumber, location, linkedin]);

    const generateCvTemplate = () => {
        if (cvWrapper.current) {
            const svg: Selection<SVGSVGElement, unknown, null, undefined> = svg_pages(
                cvWrapper.current,
                {
                    photo,
                    firstName,
                    lastName,
                    headline,
                    email,
                    phoneNumber,
                    location,
                    linkedin,
                },
            );

            console.log(svg);
        }
    };

    return (
        <div className={styles["cv-container"]}>
            <div ref={cvWrapper}></div>
        </div>
    );
}
