import fs from "fs";
import path from "path";
import { __I18N_DIR } from "../../../constants/path/path_constants";
import csv_to_json from "./csv_to_json";
import set_translations_data from "./set_translations_data";

const create_translations = async (): Promise<void> => {
    const translationsData: Record<string, Record<string, Record<string, string>>> = {
        admin: {},
        frontend: {},
    };

    const adminI18nDir = path.join(__I18N_DIR, "admin");
    const frontendI18nDir = path.join(__I18N_DIR, "frontend");

    const adminI18Files = fs.readdirSync(adminI18nDir);
    const frontendI18Files = fs.readdirSync(frontendI18nDir);

    adminI18Files.forEach((file) => {
        const fullPath = path.join(adminI18nDir, file);
        if (fs.statSync(fullPath).isFile() && path.extname(file) === ".csv") {
            const locale = file.split(".")[0];

            translationsData.admin[locale] = csv_to_json(fullPath);
        }
    });

    frontendI18Files.forEach((file) => {
        const fullPath = path.join(frontendI18nDir, file);
        if (fs.statSync(fullPath).isFile() && path.extname(file) === ".csv") {
            const locale = file.split(".")[0];

            translationsData.frontend[locale] = csv_to_json(fullPath);
        }
    });

    await set_translations_data(translationsData);
};

export default create_translations;
