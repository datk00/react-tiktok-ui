import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => {
            clearTimeout(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounced;
}

export default useDebounce;
