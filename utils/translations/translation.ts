import { useTranslations, MessageKeys } from 'next-intl';

const _t = <K extends MessageKeys>(key: K, dynamicArg?: object) => {
    const t = useTranslations();

    if (t.has(key)) {
        return t(key, {...dynamicArg});
    }

    return key;
}

export default _t;
