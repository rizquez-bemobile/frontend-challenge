import { createContext, useContext, useMemo, useState } from "react"

import type { FavoritesContextBooks } from "../../domain/types/FavoritesContextBooks"
import type { Book } from "../../domain/models/Book"

const FavoritesContext = createContext<FavoritesContextBooks | null>(null)

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<Map<string, Book>>(new Map())

    const toggleFavorite = (book: Book) => {
        setFavorites((previous) => {
            const saved = new Map(previous)

            if (saved.has(book.work))
                saved.delete(book.work)
            else
                saved.set(book.work, book)

            return saved
        })
    }

    const isFavorite = (bookWork: string) => {
        return favorites.has(bookWork)
    }

    const clearFavorites = () => {
        setFavorites(new Map())
    }

    const favoriteBooks = useMemo(() => {
        return Array.from(favorites.values())
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ favorites, favoriteBooks, toggleFavorite, isFavorite, clearFavorites }}>
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