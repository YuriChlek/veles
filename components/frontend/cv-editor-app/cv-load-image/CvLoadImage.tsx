"use client";

import React, { useState } from "react";
import Label from "@/components/base/label/Label.tsx";
import style from "./cv.load.image.module.scss";

const CvLoadImage: React.FC = () => {
    const [base64, setBase64] = useState<string | null>(null);
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    setBase64(reader.result.toString());
                }
            };

            reader.onerror = () => {
                console.error("File reading failed.");
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={style["cv-load-wrapper"]}>
            <Label className={style["cv-load"]}>
                <input
                    className={style["cv-load-hide"]}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                />
                {base64 && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        style={{ direction: "ltr" }}
                        className="cv-preview"
                    >
                        <image
                            preserveAspectRatio="xMidYMid slice"
                            x="0"
                            y="0"
                            width="128"
                            height="128"
                            href={base64}
                            imageRendering="optimizeSpeed"
                            clipPath="url(#6051bb85-f53c-4185-85a4-2c7686eb6813)"
                        />
                    </svg>
                )}
            </Label>
        </div>
    );
};

export default CvLoadImage;
