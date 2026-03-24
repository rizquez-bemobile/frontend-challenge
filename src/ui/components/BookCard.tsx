import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

import { useFavorites } from "../../app/context/FavoritesContext"
import type { Book } from "../../domain/models/Book"

type BookCardProps = {
    book: Book
    coverUrl?: string
}

export const BookCard = ({ book, coverUrl }: BookCardProps) => {
    const { toggleFavorite, isFavorite } = useFavorites()
    const favorite = isFavorite(book.work)

    return (
        <article className="group flex flex-col justify-between overflow-hidden bg-brand-black [clip-path:polygon(0_0,100%_0,100%_95%,90%_100%,0_100%)]">
            <Link 
                to={`/book/details`}
                state={{
                    book,
                    coverUrl
                }}
            >
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

            <div className="relative flex items-center justify-between gap-2.5 p-2.5 overflow-hidden">
                <div className="absolute inset-0 bg-brand-red -translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                
                <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-2.5">
                    <p className="truncate text-sm font-normal text-brand-white">
                        {book.title}
                    </p>
                    <p className="truncate text-sm font-normal text-brand-white">
                        Authors: {book.authors}
                    </p>
                </div>

                <FontAwesomeIcon
                    icon={favorite ? solidHeart : regularHeart}
                    className={`relative z-10 shrink-0 cursor-pointer text-base ${
                        favorite ? "text-brand-red group-hover:text-brand-white transition-colors duration-500" : "text-brand-white"
                    }`}
                    onClick={() => toggleFavorite(book)}
                />
            </div>
        </article>
    )
}