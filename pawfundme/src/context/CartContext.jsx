import React, {useState, createContext} from 'react';
export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (mascota, cantidad) => {
        if(!isInCart(mascota.id)){
            setCart((prev) => [...prev,{mascota,cantidad}])
        }else{
            alert('YA RECAUDAMOS LO NECESARIO PARA AYUDAR A ' + mascota.nombre)
        }
    }

    const isInCart = (itemId) => {
        return cart.some((i) => i.item.id === itemId)
    }

    const getTotalItems = (item) => {
        let cant = 0;
        cart.forEach((e) => cant += (e.cantidad))
        return cant
    }

    const removeItem = () => {

    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
                getTotalItems,
                removeItem
            }
            }>
            {children}
        </CartContext.Provider>
    );
};
