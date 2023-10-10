import { useState } from 'react';

type Props = {
    images: string[];
    currentImage: string;
};

export const useCarousel = (images: string[]) => {
    const [currentImage, setCurrentImage] = useState<string>(images[0]);
    setInterval(() => {
        for (let index = 0; index < images.length; index++) {
            setCurrentImage(images[index]);
        }
    }, 3000);

    return currentImage;
};
