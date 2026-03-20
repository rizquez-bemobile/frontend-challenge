import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

import { useFavorites } from "../../app/context/FavoritesContext"
import type { BookCardProps } from "../../domain/types/BookCardProps"

export const BookCard = ({ book, coverUrl }: BookCardProps) => {
    const authors = book.authors?.join(', ')
    const { toggleFavorite, isFavorite } = useFavorites()
    const favorite = isFavorite(book.id)

    return (
        <article className="flex flex-col justify-between overflow-hidden bg-brand-black [clip-path:polygon(0_0,100%_0,100%_95%,90%_100%,0_100%)]">
            <Link to={`/book/${book.title}`}>
                <div className="w-full overflow-hidden border-b-[5px] border-brand-red aspect-[1/1.35]">
                    {
                        coverUrl
                            ? (
                                <img
                                    src={coverUrl}
                                    alt={book.title}
                                    className="block h-full w-full object-cover"
                                />
                            )
                            : (
                                <div className="flex flex-col gap-2.5 p-2.5">
                                    <p className="truncate text-sm font-normal text-brand-white">
                                        Title: {book.title}
                                    </p>
                                    <p className="truncate text-sm font-normal text-brand-white">
                                        No cover page
                                    </p>
                                </div>
                            )
                    }
                </div>
            </Link>

            <div className="flex items-center justify-between gap-2.5 p-2.5">
                <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                    <p className="truncate text-sm font-normal text-brand-white">
                        Published in {book.firstPublishedYear}
                    </p>
                    <p className="truncate text-sm font-normal text-brand-white">
                        Authors: {authors}
                    </p>
                </div>

                <FontAwesomeIcon
                    icon={favorite ? solidHeart : regularHeart}
                    className={`shrink-0 cursor-pointer text-base transition-colors duration-200 ${
                        favorite ? 'text-brand-red' : 'text-brand-white'
                    }`}
                    onClick={() => toggleFavorite(book.id)}
                />
            </div>
        </article>
    )
}