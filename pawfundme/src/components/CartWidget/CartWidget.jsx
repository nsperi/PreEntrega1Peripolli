import React from 'react';
import PerroCallejero from './Images/perro-callejero.jpg'

const CartWidget = () => {
    return (
        <div>
            <img src={PerroCallejero} alt="Perro" />
            <p>Rufo necesita pagar su cirugia. tenemos que juntar $25.000 Nos ayudas?</p>
        </div>
    );
};

export default CartWidget;