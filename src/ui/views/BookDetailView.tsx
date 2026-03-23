import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import type { BookLocationState } from "../../domain/types/BookLocationState"
import { BookSummary } from "../components/BookSummary"
import { useDetailsSearch } from "../../app/hooks/useDetailsSearch"
import { Loading } from "../components/Loading"
import type { Book } from "../../domain/models/Book"

function BookDetailView() {
    const location = useLocation()
    const state = (location.state as BookLocationState | null) ?? null

    const book = state?.book as Book
    const coverUrl = state?.coverUrl as string

    const {
        details,
        isSearchingDetails,
        handleSearchDetails
    } = useDetailsSearch(book.work)

    useEffect(() => {
        if (!book.work) 
            return
        
        handleSearchDetails()
    }, [book.work])

    return isSearchingDetails ? (
        <Loading />
    ) : (
        <BookSummary
            book={book}
            coverUrl={coverUrl}
            details={details}
        />
    )
}

export default BookDetailView