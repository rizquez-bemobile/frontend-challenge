import { useState } from "react"

import type { OpenLibraryBook } from "../interfaces/OpenLibraryBook"
import { openLibraryService } from "../services/openLibraryService"

export const useBookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState<OpenLibraryBook[]>([])

    const handleSearch = async () => {
        const trimmedSearchTerm = searchTerm.trim()

        if (!trimmedSearchTerm) {
            setBooks([])
            return
        }

        try {
            const response = await openLibraryService(trimmedSearchTerm)
            setBooks(response.docs ?? [])
        } catch (error) {
            console.log(error) // TODO: Custom this!
            setBooks([])
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            handleSearch()
    }

    return {
        searchTerm,
        books,
        setSearchTerm,
        handleSearch,
        handleKeyDown
    }
}