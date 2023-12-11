import React, {createContext, useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    
    const addToCart = (mascota, cantidad) => {
      const mascotaExistente = cart.find(pet => pet.mascota.id === mascota.id);
    
        if (!mascotaExistente) {
          setCart(prev => [...prev, { mascota, cantidad }]);
          setCantidadTotal(prev => prev + cantidad);
          setTotal(prev => prev + mascota.valor * cantidad);
        } else {
          const carritoActualizado = cart.map(pet => {
            if (pet.mascota.id === mascota.id) {
              return { ...pet, cantidad: pet.cantidad + cantidad};
            } else {
              return pet;
            }
          });
          setCart(carritoActualizado);
          setCantidadTotal(prev => prev + cantidad);
          setTotal(prev => prev + mascota.valor * cantidad);
        }
    };
    
    const removeFromCart = (id) => {
      const itemEliminado = cart.find(pet => pet.mascota.id === id);
      const carritoActualizado = cart.filter(pet => pet.mascota.id !== id);
    
        setCart(carritoActualizado);
        setCantidadTotal(prev => prev - itemEliminado.cantidad);
        setTotal(prev => prev - itemEliminado.mascota.valor * itemEliminado.cantidad);
   
      };
   
    const clearCart = () => {
      setCart([]);
      setCantidadTotal(0);
      setTotal(0);
    };
    return(
        <CartContext.Provider
            value={
                {
                    cart,
                    total,
                    cantidadTotal,
                    addToCart,
                    removeFromCart,
                    clearCart
                }
            }
            >
            {children}
        </CartContext.Provider>
    )
}
