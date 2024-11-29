"use client";

import React from "react";
import Button from "@/components/base/button-base/Button.tsx";
import { usePDF } from "react-to-pdf";

export default function TechVisionary() {
    const { toPDF, targetRef } = usePDF({ filename: "my-cv.pdf" });
    const title = "Resume";
    const name = "Юрій";
    const secondName = "Члек";

    return (
        <div>
            <div ref={targetRef} className="space-y-4 p-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 595.28 841.89"
                    style={{ direction: "ltr" }}
                    className="cv-preview"
                >
                    <rect fill="#f5f5f5" height="100%" width="100%"></rect>
                    <path
                        fill="#303846"
                        d="M 0,0 L 595.28,0 C 595.28,0,595.28,0,595.28,0 L 595.28,74.375 C 595.28,74.375,595.28,74.375,595.28,74.375 L 0,74.375 C 0,74.375,0,74.375,0,74.375 L 0,0 C 0,0,0,0,0,0 Z"
                        transform="scale(1, 1.68)"
                    ></path>

                    <text
                        fill="white"
                        fontWeight="normal"
                        fontStyle="normal"
                        fontSize="25px"
                        fontFamily="Poppins"
                        y="45.3125"
                        x="25"
                    >
                        {title}
                    </text>
                    <image
                        clipPath="url(#ca79a674-557a-41f7-a0bf-c9e56f1b63fd)"
                        imageRendering="optimizeSpeed"
                        href="data:image/jpeg;base64,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"
                        height="125"
                        width="125"
                        y="0"
                        x="0"
                        preserveAspectRatio="xMidYMid slice"
                    ></image>
                    <text
                        fill="white"
                        fontWeight="normal"
                        fontStyle="normal"
                        fontSize="25px"
                        fontFamily="NotoSans"
                        y="78.5625"
                        x="150"
                    >
                        {name}
                    </text>
                    <text
                        fill="white"
                        fontWeight="normal"
                        fontStyle="normal"
                        fontSize="25px"
                        fontFamily="NotoSans"
                        y="78.5625"
                        x="221.04677734375"
                    >
                        {secondName}
                    </text>
                    <image
                        imageRendering="optimizeSpeed"
                        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM5NzliYTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHoiPjwvcGF0aD48L3N2Zz4="
                        height="9"
                        width="9"
                        y="94.625"
                        x="150"
                    ></image>
                    <text
                        fill="#979ba2"
                        fontWeight="normal"
                        fontStyle="normal"
                        fontSize="9px"
                        fontFamily="Poppins"
                        y="101.7375"
                        x="164"
                    >
                        yuriichlek@gamil.com
                    </text>
                    <image
                        imageRendering="optimizeSpeed"
                        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM5NzliYTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5My40IDI0LjZsLTEwNC0yNGMtMTEuMy0yLjYtMjIuOSAzLjMtMjcuNSAxMy45bC00OCAxMTJjLTQuMiA5LjgtMS40IDIxLjMgNi45IDI4bDYwLjYgNDkuNmMtMzYgNzYuNy05OC45IDE0MC41LTE3Ny4yIDE3Ny4ybC00OS42LTYwLjZjLTYuOC04LjMtMTguMi0xMS4xLTI4LTYuOWwtMTEyIDQ4QzMuOSAzNjYuNS0yIDM3OC4xLjYgMzg5LjRsMjQgMTA0QzI3LjEgNTA0LjIgMzYuNyA1MTIgNDggNTEyYzI1Ni4xIDAgNDY0LTIwNy41IDQ2NC00NjQgMC0xMS4yLTcuNy0yMC45LTE4LjYtMjMuNHoiPjwvcGF0aD48L3N2Zz4="
                        height="9"
                        width="9"
                        y="94.625"
                        x="271.794"
                    ></image>
                    <text
                        fill="#979ba2"
                        fontWeight="normal"
                        fontStyle="normal"
                        fontSize="9px"
                        fontFamily="Poppins"
                        y="101.7375"
                        x="284.68899999999996"
                    >
                        +380673605914
                    </text>
                    <path
                        fill="#e2e2e2"
                        d="M 395.28,150 L 395.78,150 C 395.78,150,395.78,150,395.78,150 L 395.78,816.89 C 395.78,816.89,395.78,816.89,395.78,816.89 L 395.28,816.89 C 395.28,816.89,395.28,816.89,395.28,816.89 L 395.28,150 C 395.28,150,395.28,150,395.28,150 Z"
                    ></path>
                    <foreignObject x="25" y="164" width="360" height="200">
                        <h1>Hello, SVG with HTML!</h1>
                        <p>This is a paragraph inside an SVG element.</p>
                    </foreignObject>
                </svg>
            </div>
            <Button onClick={() => toPDF()} className="mt-4">
                Download PDF
            </Button>
        </div>
    );
}

//TechVisionary