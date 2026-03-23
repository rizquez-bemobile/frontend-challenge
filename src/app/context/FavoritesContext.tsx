import { createContext, useContext, useState } from "react"

import type { FavoritesContextBooks } from "../../domain/types/FavoritesContextBooks"

const FavoritesContext = createContext<FavoritesContextBooks | null>(null)

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<Set<string>>(new Set())

    const toggleFavorite = (bookWork: string) => {
        setFavorites((previous) => {
            const saved = new Set(previous)

            if (saved.has(bookWork))
                saved.delete(bookWork)
            else
                saved.add(bookWork)

            return saved
        })
    }

    const isFavorite = (bookWork: string) => {
        return favorites.has(bookWork)
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