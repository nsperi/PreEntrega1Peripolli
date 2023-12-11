import React from 'react';
import './card.css'

const Card = ({mascota}) => {
    return (
        <div className='card'>
            <img src={mascota.img} alt={mascota.nombre} />
            <h3>{mascota.nombre}</h3>
            <p>{mascota.descripcion}</p>
        </div>
    );
};

export default Card;