import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import { useFavorites } from "../../app/context/FavoritesContext"
import openlibrarypng from "@/assets/open-library.png"

export const Header = () => {
    const { favorites } = useFavorites()

    return (
        <header className="flex justify-between bg-brand-black px-20 py-5 text-brand-white">
            <Link to="/">
                <img
                    src={openlibrarypng}
                    alt="Open Library Image"
                    className="w-32.5"
                />
            </Link>
            <span className="self-center">
                <FontAwesomeIcon
                    icon={faHeart}
                    className="mr-2.5 cursor-pointer text-brand-red"
                />
                {favorites.size}
            </span>
        </header>
    )
}