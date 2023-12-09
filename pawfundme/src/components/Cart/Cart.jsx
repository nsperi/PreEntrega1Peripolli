import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, cantidadTotal, clearCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>CARRITO</h1>
            {cart.length === 0 ? (
                <div>
                    <h2>TU CARRITO ESTÁ VACÍO</h2>
                    <Link to={'/'}>Ir al inicio</Link>
                </div>
            ) : (
                <div>
                    {cart.map((m) => (
                        <CartItem key={m.mascota.id} cartItem={m} removeFromCart={removeFromCart} />
                    ))}
                    <h2>Valor total del carrito: ${cantidadTotal}</h2>
                    <button onClick={() => clearCart()}>ELIMINAR</button>
                    <Link to={'/Checkout'}>COMPLETAR DONACIÓN</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;