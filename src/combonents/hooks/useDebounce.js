import Proptypes from 'prop-types';
import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debounceValue;
}

useDebounce.propTypes = {
    value: Proptypes.string,
    delay: Proptypes.number,
};

export default useDebounce;
