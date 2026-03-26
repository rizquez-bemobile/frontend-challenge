import { useEffect, useLayoutEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { BookSummary } from "../components/BookSummary"
import { useDetailsSearch } from "../../app/hooks/useDetailsSearch"
import { Modal } from "../components/Modal"
import type { Book } from "../../domain/models/Book"
import { BooksSubject } from "../components/BooksSubject"
import { useBooksBySubjects } from "../../app/hooks/useBooksBySubjects"
import { useFilteredBooks } from "../../app/hooks/useFilteredBooks"
import { useBookCovers } from "../../app/hooks/useBookCovers"

type BookLocationState = {
  book: Book
  coverUrl?: string
}

function BookDetailView() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = (location.state as BookLocationState | null) ?? null

  const book = state?.book as Book
  const coverUrl = state?.coverUrl as string

  const [excludedWorks, setExcludedWorks] = useState<string[]>([])

  const {
    details,
    errorMessage,
    isSearchingDetails,
    handleSearchDetails
  } = useDetailsSearch(book.work)

  useEffect(() => {
    if (!book.work) 
      return
      
    handleSearchDetails()
  }, [book.work])

  useEffect(() => {
    const storedBookKeys = localStorage.getItem("bookKeys")

    if (storedBookKeys)
      setExcludedWorks(JSON.parse(storedBookKeys))
  }, [])

  const subjects = useMemo(
    () => details?.subjects?.slice(0, 5) ?? [],
    [details?.subjects]
  )

  const {
    books: subjectBooks,
    isLoading: isLoadingSubjects,
    errorMessageSubjects,
    handleSubjectBooks
  } = useBooksBySubjects({ subjects, excludedWorks })

  useLayoutEffect(() => {
    if (subjects.length === 0) 
      return

    void handleSubjectBooks()
  }, [subjects, excludedWorks])

  const { filteredBooks } = useFilteredBooks(subjectBooks)
  
    const {
      coversByBookWork,
      isLoadingCovers
    } = useBookCovers(filteredBooks)

  if (isSearchingDetails || isLoadingSubjects || isLoadingCovers)
    return <Modal />

  if (errorMessage)
    return <Modal category="error" onClose={() => navigate(-1)} text={errorMessage} />

  if (errorMessageSubjects)
    return <Modal category="error" onClose={() => navigate(-1)} text={errorMessageSubjects} />

  return (
    <>
      <BookSummary
        book={book}
        coverUrl={coverUrl}
        details={details}
      />

      <BooksSubject 
        subjectBooks={subjectBooks}
        coversByBookWork={coversByBookWork}
      />
    </>
  )
}

export default BookDetailView