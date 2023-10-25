import React, {useState} from 'react';
import CartWidget from '../CartWidget/CartWidget';


const Count = ({initial, stock}) => {
    let [counter, setCounter] = useState(initial)

    const increment = () => {
        if (counter < stock) {
            setCounter(counter +1)
        }
    }

    return (
        <div>
            <CartWidget/>
            <button onClick={() => {increment()}}>Donar</button>
            <p>Contador: {counter}</p>
        </div>
    );
};

export default Count;