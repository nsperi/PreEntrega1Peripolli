import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    const increment =() => {
        if(count<stock){
            setCount(count+1)
        }
    }
    const decrement =() => {
        if(count>initial){
            setCount(count-1)
        }
    }
    return (
        <div>
            <button onClick={increment}>incrementar</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={()=>{onAdd(count)}}>Donar</button>
        </div>
    );
};

export default ItemCount;