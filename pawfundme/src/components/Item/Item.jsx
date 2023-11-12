import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({mascota}) => {

    
    return (
        <>
        <div className='contenedor'>
            <Link to={`/item/${mascota.id}`}>
                <h1>{mascota.nombre}</h1>
            </Link>
            <img src={mascota.img} alt={mascota.nombre}/>    
        </div>
        </>
    );
};

export default Item;