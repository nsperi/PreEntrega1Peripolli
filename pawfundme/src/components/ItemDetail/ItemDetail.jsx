import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({mascota}) => {

    const onAdd = (quantity) => {
        alert('Gracias por donar $'+ quantity + ' para ayudar a '+ mascota.nombre)
    }
    
    return (
        <div>
            <img src={mascota.img} alt={mascota.nombre} />
            <h1>{mascota.nombre}</h1>
            <p>Valor: {mascota.precio}</p>
            <p>{mascota.descripcion}</p>
            <h2>Nos hace falta recaudar ${mascota.stock}</h2>
            <ItemCount initial={1} stock={mascota.stock} onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetail;