"use client";

import React, { useRef } from "react";
import svg_pages from "@/components/frontend/cv-editor-app/cv-templates/tech-visionary/utils/create_page.ts";
import cvStore from "@/state/slices/cv.ts";
import styles from "./CvMaker.module.scss";
import { Selection } from "d3";
import useStableEffect from "@/hooks/useStableEffect.ts";

const TechVisionary: React.FC = () => {
    const {
        photo,
        givenName,
        familyName,
        headline,
        email,
        phoneNumber,
        location,
        linkedin,
    } = cvStore();
    const cvWrapper = useRef<HTMLDivElement>(null);

    useStableEffect(
        () => {
            generateCvTemplate();
        },
        [givenName, photo, familyName, headline, email, phoneNumber, location, linkedin],
        250,
    );

    const generateCvTemplate = () => {
        if (cvWrapper.current) {
            const svg: Selection<SVGSVGElement, unknown, null, undefined> = svg_pages(
                cvWrapper.current,
                {
                    photo,
                    givenName,
                    familyName,
                    headline,
                    email,
                    phoneNumber,
                    location,
                    linkedin,
                },
            );

            if (svg) {
            }
        }
    };

    return (
        <div className={styles["cv-container"]}>
            <div ref={cvWrapper}></div>
        </div>
    );
};

export default TechVisionary;
