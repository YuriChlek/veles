import Quill from "quill";
import { QuillOptions } from "quill/core/quill";

interface QuillEditor {
    (): (element: HTMLDivElement | string | null, options: QuillOptions) => Quill | null;
}

const InitEditor: QuillEditor = (): ((
    element: HTMLDivElement | string | null,
    options: QuillOptions,
) => Quill | null) => {
    const quillInstances = new Map<HTMLElement | string, Quill>();

    return (
        element: HTMLDivElement | string | null,
        options: QuillOptions,
    ): Quill | null => {
        if (!element) {
            return null;
        }

        if (quillInstances.has(element)) {
            return quillInstances.get(element)!;
        }

        const quill = new Quill(element, options /**/);

        quillInstances.set(element, quill);

        return quill;
    };
};

const QuillEditor: (
    element: HTMLDivElement | string | null,
    options: QuillOptions,
) => Quill | null = InitEditor();

export default QuillEditor;
