import React from 'react';
import useCounter from '../useCounter/useCounter';

const Counter = () => {
    const {count, increment, decrement} = useCounter(0)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
};

export default Counter;