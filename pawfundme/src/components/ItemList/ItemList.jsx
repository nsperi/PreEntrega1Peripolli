import React from 'react';
import Item from '../Item/Item';
import Card from '../Card/Card';
import './itemlist.css'

const ItemList = ({mascotas}) => {
    return (
        <div className='card-container'>
            {mascotas.map((mascota) =>(
                <Item
                key={mascota.id}
                mascota={mascota}/>
            )) }
        </div>
    );
};

export default ItemList;