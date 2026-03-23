import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

import type { BookSummaryProps } from "../../domain/types/BookSummaryProps"
import { useFavorites } from "../../app/context/FavoritesContext"

export const BookSummary = ({ work, title, coverUrl, details }: BookSummaryProps) => {
    const { toggleFavorite, isFavorite } = useFavorites()
    const favorite = isFavorite(work)

    return (
        <section className="bg-brand-black">
            <summary className="ml-60 mr-60 flex gap-10">
                {coverUrl && <img className="w-full max-w-62.5 h-auto object-cover" src={coverUrl} alt={title} />}
                <section className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <h1 className="text-brand-white font-bold text-5xl">{title}</h1>
                        <FontAwesomeIcon
                            icon={favorite ? solidHeart : regularHeart}
                            className={`shrink-0 cursor-pointer text-2xl transition-colors duration-200 self-center ${
                                favorite ? 'text-brand-red' : 'text-brand-white'
                            }`}
                            onClick={() => toggleFavorite(work)}
                        />
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="text-brand-white text-base text-justify">
                            {details?.description}
                        </p>
                        <p className="text-brand-white text-base">
                            <span className="font-bold">First publish date:</span> {details?.firstPublishDate}
                        </p>
                    </div>
                </section>
            </summary>
        </section>
    )
}