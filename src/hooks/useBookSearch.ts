import { useRef, useState } from "react"

import type { OpenLibraryBook } from "../interfaces/OpenLibraryBook"
import { openLibraryService } from "../services/openLibraryService"

export const useBookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState<OpenLibraryBook[]>([])
    const [isSearching, setIsSearching] = useState(false)

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

        setIsSearching(true)

        try {
            const response = await openLibraryService(trimmedSearchTerm)
            setBooks(response.docs ?? [])
            lastSearchedTerm.current = trimmedSearchTerm
        } catch (error) {
            console.log(error) // TODO: Could a modal be created to display messages?
            setBooks([])
        } finally {
            setIsSearching(false)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            handleSearch()
    }

    return {
        searchTerm,
        books,
        isSearching,
        setSearchTerm,
        handleSearch,
        handleKeyDown
    }
}