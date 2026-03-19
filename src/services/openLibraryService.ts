import type { OpenLibrarySearchResponse } from "../interfaces/OpenLibrarySearchResponse"


export const openLibraryService = async (searchTerm: string): Promise<OpenLibrarySearchResponse> => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`)

    if (!response.ok) 
        throw new Error('Error during the search') // TODO: Custom this error message
    
    return response.json()
}