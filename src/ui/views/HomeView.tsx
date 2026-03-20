import { SearchBar } from "../components/SearchBar"
import { Loading } from "../components/Loading"
import { BooksFound } from "../components/BooksFound"
import { useBookCovers } from "../../app/hooks/useBookCovers"
import { useBookSearch } from "../../app/hooks/useBookSearch"
import { useFilteredBooks } from "../../app/hooks/useFilteredBooks"
import lookingforabook from '@/assets/looking-for-a-book.jpg'

function HomeView() {
    const {
        searchTerm,
        books,
        isSearching,
        setSearchTerm,
        handleSearch,
        handleKeyDown
    } = useBookSearch()

    const { filteredBooks } = useFilteredBooks(books)

    const {
        coversByBookId,
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
                    coversByBookId={coversByBookId}
                />
            ) : (
                <img src={lookingforabook} alt="Looking for a book" className="mx-auto" />
            )}
        </>
    )
}

export default HomeView