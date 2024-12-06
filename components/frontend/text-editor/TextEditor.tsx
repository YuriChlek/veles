"use client";

import React, { useEffect, useRef } from "react";
import Quill from "quill";
import { Delta } from "quill";
import QuillEditor from "@/utils/quill/QuillEditor.ts";
import { QuillOptions } from "quill/core/quill";

const TextEditor = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const editorOptions: QuillOptions = {
            theme: "snow",
            modules: {
                toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link"],
                    ["clean"],
                ],
            },
        };
        const editor: Quill | null = QuillEditor(editorRef.current, editorOptions);

        if (editor) {
            const delta: Delta = editor.clipboard.convert({ text: "test_text" });
            editor.setContents(delta);

            editor.on("text-change", () => {
                /*const content: Delta | undefined =
                        delta?.editor?.getDelta();
                    console.log(content);*/
            });
        }
    }, []);

    return (
        <div
            className={"test"}
            ref={editorRef}
            style={{ height: "300px", border: "1px solid #ccc" }}
        />
    );
};

export default TextEditor;
