import { useState } from "react"

import type { Details } from "../../domain/models/Details"
import { openLibraryDetails } from "../../api/openLibraryDetails"

export const useDetailsSearch = (work: string) => { // TODO: It is necessary to handle errors
    const [details, setDetails] = useState<Details | null>(null)
    const [isSearchingDetails, setIsSearchingDetails] = useState(false)

    const handleSearchDetails = async () => {
        if (!work) {
            setDetails(null)
            return
        }

        setIsSearchingDetails(true)

        try {
            const response = await openLibraryDetails(work)
            setDetails(response)
        } catch (error) {
            console.log(error)
            setDetails(null)
        } finally {
            setIsSearchingDetails(false)
        }
    }

    return {
        details,
        isSearchingDetails,
        handleSearchDetails
    }
}