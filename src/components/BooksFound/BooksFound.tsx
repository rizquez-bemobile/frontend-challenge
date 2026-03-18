import type { BooksFoundProps } from "../../types/BooksFoundProps"
import { BookCard } from "../BookCard/BookCard"
import styles from './BooksFound.module.css'

export const BooksFound = ({ books }: BooksFoundProps) => {
    const renderedBooks = books.map((book) => (
        <BookCard key={book.key} book={book} />
    ))

    return (
        <section className={styles.container}>
            {renderedBooks}
        </section>
    )
}