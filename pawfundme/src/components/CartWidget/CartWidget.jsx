import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {getTotalItems} = useContext(CartContext)
    return (
        <div>
            <p>GRACIAS POR TU DONACIÓN DE ${getTotalItems()}</p>
        </div>
    );
};

export default CartWidget;