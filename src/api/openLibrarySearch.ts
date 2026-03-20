import type { Book } from "../domain/models/Book"
import type { OpenLibrarySearchResponse } from "./contracts/OpenLibrarySearchResponse"
import { OPEN_LIBRARY_BASE_URL } from "../shared/constants"
import { mapOpenLibraryToBook } from "./mappers/mapOpenLibraryToBook"

export const openLibrarySearch = async (searchTerm: string): Promise<Book[]> => {
    const response = await fetch(`${OPEN_LIBRARY_BASE_URL}/search.json?q=${encodeURIComponent(searchTerm)}`)

    if (!response.ok) 
        throw new Error('Error during the search') // TODO: Custom this error message

    const data: OpenLibrarySearchResponse = await response.json()

    return data.docs.map(mapOpenLibraryToBook)
}