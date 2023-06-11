import React from 'react'


export const CartContext = React.createContext()

export function CartProvider({children, value}){
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

