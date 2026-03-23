import type { Details } from "../domain/models/Details"
import { OPEN_LIBRARY_BASE_URL } from "../shared/constants"
import type { OpenLibraryWork } from "./contracts/OpenLibraryWork"
import { mapOpenLibraryToDetails } from "./mappers/mapOpenLibraryToDetails"

export const openLibraryDetails = async (work: string): Promise<Details> => {
    const response = await fetch(`${OPEN_LIBRARY_BASE_URL}${work}.json`)

    if (!response.ok) 
        throw new Error('Error during the search') // TODO: Custom this error message

    const data: OpenLibraryWork = await response.json()
    
    return mapOpenLibraryToDetails(data)
}