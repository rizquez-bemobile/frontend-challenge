import { useLayoutEffect } from "react"

import { BookCard } from "./BookCard"
import type { Book } from "../../domain/models/Book"

type BooksFoundProps = {
    books: Book[]
    coversByBookWork: Record<string, string>
    onRendered?: () => void
}

export const BooksFound = ({ books, coversByBookWork, onRendered }: BooksFoundProps) => {
    useLayoutEffect(() => {
        const bookKeys = books.map(book => book.work)
        localStorage.setItem("bookKeys", JSON.stringify(bookKeys))
        
        onRendered?.()
    }, [books, coversByBookWork, onRendered])

    const renderedBooks = books.map((book) => (
        <BookCard
            key={book.work}
            book={book}
            coverUrl={coversByBookWork[book.work]}
        />
    ))

    return (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5 px-20 pb-20">
            {renderedBooks}
        </section>
    )
}