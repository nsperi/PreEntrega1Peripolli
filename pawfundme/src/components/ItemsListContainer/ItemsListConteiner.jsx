import React from 'react';
import Count from '../Count/Count';

const ItemsListConteiner = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <Count initial={1} stock={25000}/>
        </div>
    );
};

export default ItemsListConteiner;