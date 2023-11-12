import React from 'react';
import Item from '../Item/Item';

const ItemList = ({mascotas}) => {
    return (
        <>
            {mascotas.map((mascota) =>(
                <Item
                key={mascota.id}
                mascota={mascota}/>
            )) }
        </>
    );
};

export default ItemList;