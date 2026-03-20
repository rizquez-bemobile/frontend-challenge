import { useEffect, useState } from "react"
import { useBookCovers } from "../../app/hooks/useBookCovers"
import { useBookSearch } from "../../app/hooks/useBookSearch"
import { useFilteredBooks } from "../../app/hooks/useFilteredBooks"
import { SearchBar } from "../components/SearchBar"
import { Loading } from "../components/Loading"
import { BooksFound } from "../components/BooksFound"

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
        coversByBookId,
        isLoadingCovers
    } = useBookCovers(filteredBooks)


    const [areCardsRendered, setAreCardsRendered] = useState(false)

    useEffect(() => {
        setAreCardsRendered(false)
    }, [filteredBooks, coversByBookId])

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
                            coversByBookId={coversByBookId}
                            onRendered={() => setAreCardsRendered(true)}
                        />
                    )
            }
        </>
    )
}

export default HomeView