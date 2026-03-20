import { useLayoutEffect } from "react"

import type { BooksFoundProps } from "../../domain/types/BooksFoundProps"
import { BookCard } from "./BookCard"

export const BooksFound = ({ books, coversByBookId, onRendered }: BooksFoundProps) => {
    useLayoutEffect(() => {
        onRendered?.()
    }, [books, coversByBookId, onRendered])

    const renderedBooks = books.map((book) => (
        <BookCard
            key={book.id}
            book={book}
            coverUrl={coversByBookId[book.id]}
        />
    ))

    return (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5 px-20 pb-20">
            {renderedBooks}
        </section>
    )
}