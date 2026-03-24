import { useNavigate, useOutletContext } from "react-router-dom"

import { Modal } from "../components/Modal"
import { BooksFound } from "../components/BooksFound"
import lookingforabook from "@/assets/looking-for-a-book.jpg"
import type { Book } from "../../domain/models/Book"
import type { CoversByBookWork } from "../../domain/types/CoversByBookWork"

type SearchLayoutContext = {
  filteredBooks: Book[]
  coversByBookWork: CoversByBookWork
  isSearching: boolean
  isLoadingCovers: boolean,
  errorMessage: string
}

function BookResultsView() {
  const { filteredBooks, coversByBookWork, errorMessage } = useOutletContext<SearchLayoutContext>()
  const navigate = useNavigate()

  const hasBooks = filteredBooks.length > 0

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