import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)

    return (
        <div>
            <Link to='/cart'>
            <p>GRACIAS POR TU DONACIÓN DE ${cantidadTotal}</p>
            </Link>
            <p>{cantidadTotal}</p>
           
        </div>
    );
};

export default CartWidget;