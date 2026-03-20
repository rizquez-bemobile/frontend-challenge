import { useRef, useState } from "react"

import { openLibrarySearch } from "../../api/openLibrarySearch"
import type { Book } from "../../domain/models/Book"

export const useBookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState<Book[]>([])
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
            const response = await openLibrarySearch(trimmedSearchTerm)
            setBooks(response ?? [])
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