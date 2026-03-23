import { useNavigate, useOutletContext } from "react-router-dom"

import { Modal } from "../components/Modal"
import { BooksFound } from "../components/BooksFound"
import lookingforabook from "@/assets/looking-for-a-book.jpg"
import type { SearchLayoutContext } from "../../domain/types/SearchLayoutContext"

function BookResultsView() {
  const { filteredBooks, coversByBookWork, isSearching, isLoadingCovers, errorMessage } = useOutletContext<SearchLayoutContext>()
  const navigate = useNavigate()

  const isLoading = isSearching || isLoadingCovers
  const hasBooks = filteredBooks.length > 0

  if (isLoading)
    return <Modal />

  if (errorMessage)
    return <Modal category="error" onClose={() => navigate(-1)} text={errorMessage} />

  if (hasBooks)
    return <BooksFound 
      books={filteredBooks} 
      coversByBookWork={coversByBookWork} 
    />

  return <img src={lookingforabook} alt="Looking for a book" className="mx-auto" />
}

export default BookResultsView