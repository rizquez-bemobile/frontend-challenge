import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import type { BookLocationState } from "../../domain/types/BookLocationState"
import { BookSummary } from "../components/BookSummary"
import { useDetailsSearch } from "../../app/hooks/useDetailsSearch"
import { Loading } from "../components/Loading"

function BookDetailView() {
    const location = useLocation()
    const state = (location.state as BookLocationState | null) ?? null

    const work = state?.work ?? ''
    const title = state?.title ?? ''
    const coverUrl = state?.coverUrl ?? ''

    const {
        details,
        isSearchingDetails,
        handleSearchDetails
    } = useDetailsSearch(work)

    useEffect(() => {
        if (!work) 
            return
        
        handleSearchDetails()
    }, [work])

    return isSearchingDetails ? (
        <Loading />
    ) : (
        <BookSummary
            work={work}
            title={title}
            coverUrl={coverUrl}
            details={details}
        />
    )
}

export default BookDetailView