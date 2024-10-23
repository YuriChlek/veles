import path from "node:path";

export const __BASE_DIR: string = path.resolve(__dirname, '../../');
export const __ENV_FILE: string = path.resolve(__dirname, '../../.env');
export const __APP_DIR: string = path.resolve(__dirname, '../../app');
export const __API_DIR: string= path.resolve(__dirname, '../../api');
export const __LOGS_DIR: string = path.resolve(__dirname, '../../logs');
export const __I18N_DIR: string = path.resolve(__dirname, '../../i18n');
export const __I18N_CACHE_DIR: string = path.resolve(__dirname, '../../.cache/translations');
