import { useEffect, useState } from 'react';

interface ProgressiveImageProps {
    src: string;
    fallbackSrc: string;
}

export default function useProgressiveImage({ src, fallbackSrc }: ProgressiveImageProps) {
    const [currentSrc, setCurrentSrc] = useState<string>('');

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
