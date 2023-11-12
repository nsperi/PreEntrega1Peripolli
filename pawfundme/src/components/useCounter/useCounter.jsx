import React, {useState} from 'react';

const UseCounter = (initial) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
    return {count, increment, decrement};
};

export default UseCounter;