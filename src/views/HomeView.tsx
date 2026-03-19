import { BooksFound } from "../components/BooksFound/BooksFound"
import { Loading } from "../components/Loading/Loading"
import { SearchBar } from "../components/SearchBar/SearchBar"
import { useBookSearch } from "../hooks/useBookSearch"
import { useBooksReady } from "../hooks/useBooksReady"
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
        isImagesReady,
    } = useBooksReady(filteredBooks)

    const shouldShowLoading = isSearching || !isImagesReady

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
                : <BooksFound books={filteredBooks} />
            }
        </>
    )
}

export default HomeView