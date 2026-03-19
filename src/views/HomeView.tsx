import { useEffect, useState } from "react"

import { BooksFound } from "../components/BooksFound/BooksFound"
import { Loading } from "../components/Loading/Loading"
import { SearchBar } from "../components/SearchBar/SearchBar"
import { useBookCovers } from "../hooks/useBookCovers"
import { useBookSearch } from "../hooks/useBookSearch"
import { useFilteredBooks } from "../hooks/useFilteredBooks"

function HomeView() {
    const {
        searchTerm,
        books,
        isSearching,
        setSearchTerm,
        handleSearch,
        handleKeyDown
    } = useBookSearch()

    const {
        filteredBooks
    } = useFilteredBooks(books)

    const {
        coversByBookKey,
        isLoadingCovers
    } = useBookCovers(filteredBooks)

    const [areCardsRendered, setAreCardsRendered] = useState(false)

    useEffect(() => {
        setAreCardsRendered(false)
    }, [filteredBooks, coversByBookKey])

    const hasBooks = filteredBooks.length > 0

    const shouldShowLoading = isSearching || isLoadingCovers || (hasBooks && !areCardsRendered)

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                results={filteredBooks.length} // TODO: Should the results be a separate component?
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleKeyDown={handleKeyDown}
            />

            {
                shouldShowLoading
                    ? <Loading />
                    : (
                        <BooksFound
                            books={filteredBooks}
                            coversByBookKey={coversByBookKey}
                            onRendered={() => setAreCardsRendered(true)}
                        />
                    )
            }
        </>
    )
}

export default HomeView