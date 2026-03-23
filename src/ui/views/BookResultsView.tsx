import { useOutletContext } from "react-router-dom"

import { Loading } from "../components/Loading"
import { BooksFound } from "../components/BooksFound"
import lookingforabook from "@/assets/looking-for-a-book.jpg"
import type { SearchLayoutContext } from "../../domain/types/SearchLayoutContext"

function BookResultsView() {
  const { filteredBooks, coversByBookWork, isSearching, isLoadingCovers } = useOutletContext<SearchLayoutContext>()

  const isLoading = isSearching || isLoadingCovers
  const hasBooks = filteredBooks.length > 0

  return isLoading ? (
    <Loading />
  ) : hasBooks ? (
    <BooksFound
      books={filteredBooks}
      coversByBookWork={coversByBookWork}
    />
  ) : (
    <img src={lookingforabook} alt="Looking for a book" className="mx-auto" />
  )
}

export default BookResultsView