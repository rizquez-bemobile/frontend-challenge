import { useFavorites } from "../../app/context/FavoritesContext"
import { useBookCovers } from "../../app/hooks/useBookCovers"
import { BooksFound } from "../components/BooksFound"
import lookingforabook from "@/assets/looking-for-a-book.jpg"

function FavoriteBooksView () {
    const { favoriteBooks } = useFavorites()

    const {
        coversByBookWork,
        isLoadingCovers
    } = useBookCovers(favoriteBooks)

    const hasFavorites = favoriteBooks.length > 0

    if (isLoadingCovers)
        return null

    if (hasFavorites)
        return <BooksFound
            books={favoriteBooks}
            coversByBookWork={coversByBookWork}
        />

    return <img src={lookingforabook} alt="No favorite books" className="mx-auto" />
}

export default FavoriteBooksView