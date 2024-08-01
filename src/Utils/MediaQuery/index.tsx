import { useEffect, useState } from "react";


export function useMediaQuery(query: any) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => {
            setMatches(media.matches);
        };
        let list: any
        if (typeof media.addEventListener === "function") {
            list = media.addEventListener("change", listener);
        } else {
            media.addListener(listener);
        }

        return () => {
            if (typeof media.removeEventListener === "function") {
                media.removeEventListener("change", listener);
            } else {
                media.removeListener(list);
            }
        };
    }, [matches, query]);

    return matches;
}


export const useIsSmall = () => useMediaQuery('(min-width: 480px)');
export const useIsMedium = () => useMediaQuery('(max-width: 850px)');