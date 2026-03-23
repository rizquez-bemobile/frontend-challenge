import { useLocation, useNavigate } from "react-router-dom"

import { SearchBar } from "../components/SearchBar"
import { Loading } from "../components/Loading"
import { BooksFound } from "../components/BooksFound"
import { useBookCovers } from "../../app/hooks/useBookCovers"
import { useBookSearch } from "../../app/hooks/useBookSearch"
import { useFilteredBooks } from "../../app/hooks/useFilteredBooks"
import lookingforabook from '@/assets/looking-for-a-book.jpg'
import type { SearchState } from "../../domain/types/SearchState"

function HomeView() {
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
            navigate('.', {
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
    const hasBooks = filteredBooks.length > 0

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                results={filteredBooks.length}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleKeyDown={handleKeyDown}
            />

            {isLoading ? (
                <Loading />
            ) : hasBooks ? (
                <BooksFound
                    books={filteredBooks}
                    coversByBookWork={coversByBookWork}
                />
            ) : (
                <img src={lookingforabook} alt="Looking for a book" className="mx-auto" />
            )}
        </>
    )
}

export default HomeView