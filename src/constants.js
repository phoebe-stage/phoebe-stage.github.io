export const MINPAGEMARGINSIZE = 4;
export const SMALLPAGEMARGINSIZE = 10;
export const SMALLROUNDBUTTONSIZE = 8;
export const CAROUSELSLIDEWIDTH = 64;

export const remToPx = (rem) => {
    if (typeof window !== "undefined") {
        const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
        );
        return rem * rootFontSize;
        
    }
    return rem * 16; 
};