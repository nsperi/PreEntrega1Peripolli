import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ mascota }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(CartContext);
  
    const onAdd = (cantidad) => {
        setQuantity(cantidad);
        addToCart(mascota, cantidad);
        alert(`Gracias por donar $${cantidad} para ayudar a ${mascota.nombre}`);
    };
      
    return (
        <div className='detail-container'>
            <img src={mascota.img} alt={mascota.nombre} />
            <h1>{mascota.nombre}</h1>
            <p>Valor: ${mascota.valor}</p>
            <p>{mascota.descripcion}</p>
            <p>Categoria: {mascota.categoria}</p>
            <h2>Nos hace falta recaudar ${mascota.stock}</h2>

            {quantity === 0 ? (
                <ItemCount initial={1} stock={mascota.stock} onAdd={onAdd} />
            ) : (
                <div>
                    <p>Cantidad seleccionada: ${quantity}</p>
                    <Link to={'/cart'}>Ir al carrito</Link>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;
