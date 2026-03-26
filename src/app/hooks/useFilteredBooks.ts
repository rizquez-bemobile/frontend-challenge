import { useMemo } from "react"

import type { Book } from "../../domain/models/Book"

export const useFilteredBooks = (books: Book[]) => {
    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const hasCoverEditionKey = Boolean(book.coverEditionKey?.trim() || null)
            const hasLendingEdition = Boolean(book.lendingEdition?.trim() || null)

            return hasCoverEditionKey || hasLendingEdition
        })
    }, [books])

    return {
        filteredBooks
    }
}