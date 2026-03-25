import { useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { BookSummary } from "../components/BookSummary"
import { useDetailsSearch } from "../../app/hooks/useDetailsSearch"
import { Modal } from "../components/Modal"
import type { Book } from "../../domain/models/Book"
import { BooksSubject } from "../components/BooksSubject"

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



  // WIP

  const subjects = useMemo(
    () => details?.subjects?.slice(0, 5) ?? [],
    [details?.subjects]
  )

  console.log(subjects)

  // WIP

  

  if (isSearchingDetails)
    return <Modal />

  if (errorMessage)
    return <Modal category="error" onClose={() => navigate(-1)} text={errorMessage} />

  return (
    <>
      <BookSummary
        book={book}
        coverUrl={coverUrl}
        details={details}
      />

      <BooksSubject />
    </>
  )
}

export default BookDetailView