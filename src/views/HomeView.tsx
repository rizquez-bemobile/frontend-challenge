import { BooksFound } from "../components/BooksFound/BooksFound"
import { SearchBar } from "../components/SearchBar/SearchBar"

import { useBookSearch } from "../hooks/useBookSearch"
import { useFilteredBooks } from "../hooks/useFilteredBooks"

function HomeView() {
    const {
        searchTerm,
        books,
        setSearchTerm,
        handleSearch,
        handleKeyDown,
    } = useBookSearch()

    const {
        filteredBooks,
        results,
    } = useFilteredBooks(books)

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                results={results}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleKeyDown={handleKeyDown}
            />

            <BooksFound books={filteredBooks} />
        </>
    )
}

export default HomeView