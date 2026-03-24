import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import type { BookLocationState } from "../../domain/types/BookLocationState"
import { BookSummary } from "../components/BookSummary"
import { useDetailsSearch } from "../../app/hooks/useDetailsSearch"
import { Modal } from "../components/Modal"
import type { Book } from "../../domain/models/Book"

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
        </>
    )
}

export default BookDetailView