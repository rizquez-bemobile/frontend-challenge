import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

import type { BookCardProps } from "../../types/BookCardProps"
import styles from './BookCard.module.css'

export const BookCard = ({ book, coverUrl }: BookCardProps) => {
    const authors = book.author_name?.join(', ')

    return (
        <article className={styles.card}>
            <div className={styles.wrapper}>
                {
                    coverUrl
                        ? (
                            <img
                                src={coverUrl}
                                alt={book.title}
                                className={styles.image}
                            />
                        )
                        : (
                            <div className={styles.noCover}>
                                <p className={styles.text}>Title: {book.title}</p>
                                <p className={styles.text}>No cover page</p>
                            </div>
                        )
                }
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