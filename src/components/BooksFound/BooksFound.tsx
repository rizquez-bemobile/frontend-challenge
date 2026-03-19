import { useLayoutEffect } from "react"

import type { BooksFoundProps } from "../../types/BooksFoundProps"
import { BookCard } from "../BookCard/BookCard"
import styles from './BooksFound.module.css'

export const BooksFound = ({ books, coversByBookKey, onRendered }: BooksFoundProps) => {
    useLayoutEffect(() => {
        onRendered?.()
    }, [books, coversByBookKey, onRendered])

    const renderedBooks = books.map((book) => (
        <BookCard
            key={book.key}
            book={book}
            coverUrl={coversByBookKey[book.key]}
        />
    ))

    return (
        <section className={styles.container}>
            {renderedBooks}
        </section>
    )
}