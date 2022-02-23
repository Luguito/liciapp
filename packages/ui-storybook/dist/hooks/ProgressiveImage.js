import { useEffect, useState } from 'react';
export default function useProgressiveImage({ src, fallbackSrc }) {
    const [currentSrc, setCurrentSrc] = useState('');
    useEffect(() => {
        const fallbackImage = new Image();
        const mainImage = new Image();
        fallbackImage.src = fallbackSrc;
        mainImage.src = src;
        fallbackImage.onload = () => !currentSrc && setCurrentSrc(fallbackSrc);
        mainImage.onload = () => setCurrentSrc(src);
        return;
    }, []);
    return currentSrc;
}
//# sourceMappingURL=ProgressiveImage.js.map