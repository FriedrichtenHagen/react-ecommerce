import React from 'react'


export const FavoritesContext = React.createContext()

export function FavoritesProvider({children, value}){
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}
