import { Outlet, useLocation, useNavigate } from "react-router-dom"

import { SearchBar } from "../components/SearchBar"
import { useBookSearch } from "../../app/hooks/useBookSearch"
import type { SearchState } from "../../domain/types/SearchState"
import { useFilteredBooks } from "../../app/hooks/useFilteredBooks"
import { useBookCovers } from "../../app/hooks/useBookCovers"
import { useFavorites } from "../../app/context/FavoritesContext"
import { Modal } from "../components/Modal"

function SearchLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { favoriteBooks } = useFavorites()

  const savedSearchState = (location.state as SearchState | null) ?? null

  const showFavoritesTitle = location.pathname === "/book/favorites"

  const {
    searchTerm,
    books,
    isSearching,
    errorMessage,
    setSearchTerm,
    handleSearch,
    handleKeyDown
  } = useBookSearch({
    initialSearchState: savedSearchState,
    persistSearchState: (nextState) => {
      navigate("/book/results", {
        replace: true,
        state: nextState
      })
    }
  })

  const { filteredBooks } = useFilteredBooks(books)

  const {
    coversByBookWork,
    isLoadingCovers
  } = useBookCovers(filteredBooks)

  const isLoading = isSearching || isLoadingCovers

  return (
    <>
      {isLoading && (
        <Modal />
      )}
      

      {showFavoritesTitle && (
        <h1 className="text-3xl font-bold text-brand-black uppercase px-20 pt-12.5">Favorites</h1>
      )}

      <SearchBar
        searchTerm={searchTerm}
        results={showFavoritesTitle ? favoriteBooks.length : filteredBooks.length}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />

      <Outlet
        context={{
          filteredBooks: isLoading ? [] : filteredBooks,
          coversByBookWork,
          isSearching,
          isLoadingCovers,
          errorMessage
        }}
      />
    </>
  )
}

export default SearchLayout