import type { BookCardProps } from "../../types/BookCardProps"
import { getOpenLibraryCoverUrl } from "../../utils/getOpenLibraryCoverUrl"
import styles from './BookCard.module.css'

export const BookCard = ({ book }: BookCardProps) => {
    const authors = book.author_name?.join(', ')
    const cover = getOpenLibraryCoverUrl(book.cover_i)

    return (
        <article className={styles.card}>
            <img src={cover} alt="Cover Book Image" />
            <p className={styles.text}>Authors: {authors}</p>
            <p className={styles.text}>First publish year: {book.first_publish_year}</p>
        </article>
    )
}