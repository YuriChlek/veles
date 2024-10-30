import type { MessageKeys } from 'next-intl';
import { useTranslations } from 'next-intl';

const _t = <T, K extends MessageKeys<T, string>>(key: K, dynamicArg?: object) => {
    const t = useTranslations();

    if (t.has(key)) {
        return t(key, { ...dynamicArg });
    }

    return key;
};

export default _t;
