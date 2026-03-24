import { useMemo } from "react"

import type { Book } from "../../domain/models/Book"

export const useFilteredBooks = (books: Book[]) => {
    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const hasCoverEditionKey = Boolean(book.coverEditionKey?.trim())
            const hasLendingEdition = Boolean(book.lendingEdition?.trim())

            return hasCoverEditionKey || hasLendingEdition
        })
    }, [books])

    return {
        filteredBooks
    }
}