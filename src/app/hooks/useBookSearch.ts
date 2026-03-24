import { useRef, useState } from "react"

import { openLibrarySearch } from "../../api/requests/openLibrarySearch"
import type { Book } from "../../domain/models/Book"
import { useFavorites } from "../context/FavoritesContext"
import type { SearchState } from "../../domain/types/SearchState"

type UseBookSearchOptions = {
    initialSearchState?: SearchState | null
    persistSearchState?: (state: SearchState) => void
}

export const useBookSearch = ({ initialSearchState = null, persistSearchState }: UseBookSearchOptions = {}) => {
    const [searchTerm, setSearchTerm] = useState(() => initialSearchState?.searchTerm ?? "")
    const [books, setBooks] = useState<Book[]>(() => initialSearchState?.books ?? [])
    const [isSearching, setIsSearching] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const { clearFavorites } = useFavorites()

    const lastSearchedTerm = useRef(initialSearchState?.searchTerm ?? "")

    const handleSearch = async () => {
        const trimmedSearchTerm = searchTerm.trim()

        if (!trimmedSearchTerm) {
            setBooks([])
            lastSearchedTerm.current = ""
            clearFavorites()
            setErrorMessage(null)

            persistSearchState?.({
                searchTerm: "",
                books: []
            })

            return
        }

        if (trimmedSearchTerm === lastSearchedTerm.current)
            return

        setIsSearching(true)
        setErrorMessage(null)

        try {
            const response = await openLibrarySearch(trimmedSearchTerm)
            const nextBooks = response ?? []

            setBooks(nextBooks)
            lastSearchedTerm.current = trimmedSearchTerm

            persistSearchState?.({
                searchTerm: trimmedSearchTerm,
                books: nextBooks
            })
        } catch (error) {
            if (error instanceof Error)
                setErrorMessage(error.message)
            else
                setErrorMessage("Unknown error")

            setBooks([])

            persistSearchState?.({
                searchTerm: trimmedSearchTerm,
                books: []
            })
        } finally {
            setIsSearching(false)
            clearFavorites()
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter")
            handleSearch()
    }

    return {
        searchTerm,
        books,
        isSearching,
        errorMessage,
        setSearchTerm,
        handleSearch,
        handleKeyDown
    }
}