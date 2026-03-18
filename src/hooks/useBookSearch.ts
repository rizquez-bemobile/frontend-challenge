import { useRef, useState } from "react"

import type { OpenLibraryBook } from "../interfaces/OpenLibraryBook"
import { openLibraryService } from "../services/openLibraryService"

export const useBookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState<OpenLibraryBook[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const lastSearchedTerm = useRef('')

    const handleSearch = async () => {
        const trimmedSearchTerm = searchTerm.trim()

        if (!trimmedSearchTerm) {
            setBooks([])
            lastSearchedTerm.current = ''
            return
        }

        if (trimmedSearchTerm === lastSearchedTerm.current)
            return

        setIsLoading(true)

        try {
            const response = await openLibraryService(trimmedSearchTerm)
            setBooks(response.docs ?? [])
            lastSearchedTerm.current = trimmedSearchTerm
        } catch (error) {
            console.log(error) // TODO: Custom this!
            setBooks([])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            handleSearch()
    }

    return {
        searchTerm,
        books,
        isLoading,
        setSearchTerm,
        handleSearch,
        handleKeyDown,
    }
}