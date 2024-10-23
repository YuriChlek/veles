import translations from "@/.cache/translations/translations.json"

export function __(key: string, replacements: string | number ): string {
    let translated = translations[key] || key;

    if (typeof replacements === "string") {
        translated = translated.replace("%arg", replacements);
        return translated;
    }

    const str: string = String(replacements);

    translated = translated.replace("%arg", str);

    return translated;
}
