import { useState } from "react"

import type { Details } from "../../domain/models/Details"
import { openLibraryDetails } from "../../api/requests/openLibraryDetails"

export const useDetailsSearch = (work: string) => {
    const [details, setDetails] = useState<Details | null>(null)
    const [isSearchingDetails, setIsSearchingDetails] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleSearchDetails = async () => {
        if (!work) {
            setDetails(null)
            setErrorMessage(null)
            return
        }

        setIsSearchingDetails(true)
        setErrorMessage(null)

        try {
            const response = await openLibraryDetails(work)
            setDetails(response)
        } catch (error) {
            if (error instanceof Error)
                setErrorMessage(error.message)
            else
                setErrorMessage("Unknown error")

            setDetails(null)
        } finally {
            setIsSearchingDetails(false)
        }
    }

    return {
        details,
        isSearchingDetails,
        errorMessage,
        handleSearchDetails
    }
}