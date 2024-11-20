import type { MessageKeys } from "next-intl";
import { useTranslations } from "next-intl";

const useVelesTranslation = () => {
    const t = useTranslations();

    return <T, K extends MessageKeys<T, string>>(key: K, dynamicArg?: object) => {

        if (t.has(key)) {
            return t(key, { ...dynamicArg });
        }

        return key;
    };
};

export default useVelesTranslation;
