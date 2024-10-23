import { __ as translateFunction } from './translation';

declare global {
    var __: (key: string, replacements?: string | number) => string;
    interface Window {
        __: typeof translateFunction;
    }
}

if (typeof globalThis !== 'undefined') {
    globalThis.__ = translateFunction;
} else {
    window.__ = __
}
