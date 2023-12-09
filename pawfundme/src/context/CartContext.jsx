import React, {createContext, useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    
    const addToCart = (mascota, quantity) => {
        const mascotaExistente = cart.find(pet => pet.mascota.id === mascota.id);
      
        if (!mascotaExistente) {
          setCart(prev => [...prev, { mascota, quantity }]);
        } else {
          const carritoActualizado = cart.map(pet => {
            if (pet.mascota.id === mascota.id) {
              return { ...pet, quantity: pet.quantity + quantity };
            } else {
              return pet;
            }
          });
          setCart(carritoActualizado);
        }
      
        setCantidadTotal(prev => prev + quantity);
        setTotal(prev => {
          const totalDonado = mascota.valor * quantity;
          return prev + totalDonado;
        });
      };

    const removeFromCart = (id) => {
        const itemEliminado = cart.find(pet => pet.mascota.id === id);
        const carritoActualizado = cart.filter(pet => pet.mascota.id !== id);
    
        setCart(carritoActualizado);
        setCantidadTotal(prev => prev - itemEliminado.quantity);
        setTotal(prev => prev - itemEliminado.quantity);
    };
    
    const clearCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }
    return(
        <CartContext.Provider
            value={
                {
                    cart,
                    addToCart,
                    removeFromCart,
                    total,
                    cantidadTotal,
                    clearCart
                }
            }
            >
            {children}
        </CartContext.Provider>
    )
}
