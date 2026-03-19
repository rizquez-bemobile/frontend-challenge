export type FavoritesContextBooks = {
    favorites: Set<string>
    toggleFavorite: (bookKey: string) => void
    isFavorite: (bookKey: string) => boolean
}