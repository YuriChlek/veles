import fs from 'fs';
import path from "path";
import { __I18N_CACHE_DIR } from "../../../constants/path/path_constants";

const set_translations_data = async (data: Record<string, Record<string, Record<string, string>>>): Promise<void> => {
    try {
        const i18nDirData = path.join(__I18N_CACHE_DIR, 'translations.json');
        await fs.writeFileSync(i18nDirData, JSON.stringify(data), 'utf-8');
    } catch (error) {
        console.log(error)
    }
}

export default set_translations_data;
