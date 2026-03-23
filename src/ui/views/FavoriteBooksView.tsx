import { useFavorites } from "../../app/context/FavoritesContext"
import { useBookCovers } from "../../app/hooks/useBookCovers"
import { BooksFound } from "../components/BooksFound"
import lookingforabook from "@/assets/looking-for-a-book.jpg"

function FavoriteBooksView () { // TODO: The search bar needs to be added
    const { favoriteBooks } = useFavorites()

    const {
        coversByBookWork,
        isLoadingCovers
    } = useBookCovers(favoriteBooks)

    const hasFavorites = favoriteBooks.length > 0

    return (
        <>
            {isLoadingCovers ? null : hasFavorites ? (
                <BooksFound
                    books={favoriteBooks}
                    coversByBookWork={coversByBookWork}
                />
            ) : (
                <img src={lookingforabook} alt="No favorite books" className="mx-auto" />
            )}
        </>
    )
}

export default FavoriteBooksView