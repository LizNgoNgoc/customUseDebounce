import { useEffect, useState } from 'react';


function Debounce() {
    const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(timeout);
            }
        }, [value]);

        return debouncedValue
    }

    const Counter = () => {
        const [value, setValue] = useState(0);
        const lastValue = useDebounce(value, 1000);

        return <div>
            <p>
                Current Value: {value} | Debounced Value: {lastValue}
            </p>
            <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
    }
}

export default Debounce;