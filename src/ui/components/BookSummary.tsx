import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

import type { BookSummaryProps } from "../../domain/types/BookSummaryProps"
import { useFavorites } from "../../app/context/FavoritesContext"

export const BookSummary = ({ book, coverUrl, details }: BookSummaryProps) => {
    const { toggleFavorite, isFavorite } = useFavorites()
    const favorite = isFavorite(book.work)

    return (
        <section className="bg-brand-black [clip-path:polygon(0_0,100%_0,100%_87%,97%_100%,0_100%)] max-[600px]:[clip-path:polygon(0_0,100%_0,100%_95%,92%_100%,0_100%)]">
            <summary className="flex gap-10 min-[1400px]:mx-60 max-[600px]:flex-col max-[600px]:gap-4">
                {coverUrl && <img className="w-full max-w-62.5 h-auto object-cover max-[600px]:max-w-full" src={coverUrl} alt={book.title} />}
                <section className="flex flex-1 flex-col gap-5 max-[1400px]:pr-20 max-[600px]:px-3 max-[600px]:pb-4">
                    <div className="flex justify-between">
                        <h1 className="text-brand-white font-bold text-5xl">{book.title}</h1>
                        <FontAwesomeIcon
                            icon={favorite ? solidHeart : regularHeart}
                            className={`shrink-0 cursor-pointer text-2xl transition-colors duration-200 self-center ${
                                favorite ? 'text-brand-red' : 'text-brand-white'
                            }`}
                            onClick={() => toggleFavorite(book)}
                        />
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-brand-white text-base text-justify">
                            {details?.description}
                        </p>
                        <div className="pb-5">
                            <p className="text-brand-white text-base">
                                <span className="font-semibold">Authors:</span> {book.authors}
                            </p>
                            <p className="text-brand-white text-base pt-1">
                                <span className="font-semibold">First published:</span> {book.firstPublishedYear}
                            </p>
                            <p className="text-brand-white text-base pt-1">
                                <span className="font-semibold">Publication history:</span> {details?.firstPublishDate}
                            </p>
                        </div>
                    </div>
                </section>
            </summary>
        </section>
    )
}