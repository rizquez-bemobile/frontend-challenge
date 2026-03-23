import { Outlet, useLocation, useNavigate } from "react-router-dom"

import { SearchBar } from "../components/SearchBar"
import { useBookSearch } from "../../app/hooks/useBookSearch"
import type { SearchState } from "../../domain/types/SearchState"
import { useFilteredBooks } from "../../app/hooks/useFilteredBooks"
import { useBookCovers } from "../../app/hooks/useBookCovers"

function SearchLayout() { // TODO: The loading modal takes a while to appear
  const location = useLocation()
  const navigate = useNavigate()

  const savedSearchState = (location.state as SearchState | null) ?? null

  const {
    searchTerm,
    books,
    isSearching,
    setSearchTerm,
    handleSearch,
    handleKeyDown
  } = useBookSearch({
    initialSearchState: savedSearchState,
    persistSearchState: (nextState) => {
      navigate('/book/results', {
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

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        results={filteredBooks.length}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />

      <Outlet
        context={{
          filteredBooks,
          coversByBookWork,
          isSearching,
          isLoadingCovers
        }}
      />
    </>
  )
}

export default SearchLayout