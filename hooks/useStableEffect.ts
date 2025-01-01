import { useEffect, useRef } from "react";

function useStableEffect(callback: () => void, dependencies: any[], delay: number = 300) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, dependencies);
}

export default useStableEffect;
