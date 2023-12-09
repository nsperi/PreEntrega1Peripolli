import React from 'react';

const CartItem = ({cartItem, removeFromCart}) => {
    return (
        <div key={cartItem.mascota.id}>
            <img src={cartItem.mascota.img} alt={cartItem.mascota.nombre} />
            <h2>{cartItem.mascota.nombre}</h2>
            <h3>{cartItem.mascota.valor}</h3>
            <p>{cartItem.mascota.descripcion}</p>
            <button onClick={()=>{removeFromCart(cartItem.mascota.id)}}>Eliminar</button>
        </div> 
    );
};

export default CartItem;

