import type { Book } from "../models/Book"

export type FavoritesContextBooks = {
    favorites: Map<string, Book>
    favoriteBooks: Book[]
    toggleFavorite: (book: Book) => void
    isFavorite: (bookWork: string) => boolean
    clearFavorites: () => void
}