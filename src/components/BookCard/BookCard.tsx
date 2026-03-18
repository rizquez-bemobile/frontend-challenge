import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

import type { BookCardProps } from "../../types/BookCardProps"
import { getOpenLibraryCoverUrl } from "../../utils/getOpenLibraryCoverUrl"
import styles from './BookCard.module.css'

export const BookCard = ({ book }: BookCardProps) => {
    const authors = book.author_name?.join(', ')
    const cover = getOpenLibraryCoverUrl(book.cover_i)

    return (
        <article className={styles.card}>
            <div className={styles.wrapper}>
                <img
                    src={cover}
                    alt={book.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.information}>
                <div className={styles.about}>
                    <p className={styles.text}>Published in {book.first_publish_year}</p>
                    <p className={styles.text}>Authors: {authors}</p>
                </div>
                <FontAwesomeIcon icon={faHeart} className={styles.heart} />
            </div>
        </article>
    )
}