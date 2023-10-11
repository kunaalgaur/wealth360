import { useEffect, useState } from 'react';

export const usePageLoading = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const isLoaded = () => {
            setLoading(false);
        };

        // setTimeout(isLoaded, 4000);
        isLoaded();
    }, []);

    return loading;
};
