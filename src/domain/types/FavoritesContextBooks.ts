export type FavoritesContextBooks = {
    favorites: Set<string>
    toggleFavorite: (bookWork: string) => void
    isFavorite: (bookWork: string) => boolean
    clearFavorites: () => void
}