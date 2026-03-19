import { useMemo } from 'react'

import type { OpenLibraryBook } from '../interfaces/OpenLibraryBook'

export const useFilteredBooks = (books: OpenLibraryBook[]) => {
    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const hasCoverEditionKey = Boolean(book.cover_edition_key?.trim())
            const hasLendingEdition = Boolean(book.lending_edition_s?.trim())

            return hasCoverEditionKey && hasLendingEdition
        })
    }, [books])

    return {
        filteredBooks
    }
}