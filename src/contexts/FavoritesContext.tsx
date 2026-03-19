import { createContext, useContext, useState } from "react"

import type { FavoritesContextBooks } from "../types/FavoritesContextBooks"

const FavoritesContext = createContext<FavoritesContextBooks | null>(null)

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<Set<string>>(new Set())

    const toggleFavorite = (bookKey: string) => {
        setFavorites((previous) => {
            const saved = new Set(previous)

            if (saved.has(bookKey))
                saved.delete(bookKey)
            else
                saved.add(bookKey)

            return saved
        })
    }

    const isFavorite = (bookKey: string) => {
        return favorites.has(bookKey)
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext)

    if (!context) 
        throw new Error("useFavorites must be used within FavoritesProvider")
    
    return context
}