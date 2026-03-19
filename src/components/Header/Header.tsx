import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.css'
import OpenLibraryPng from '@/assets/images/open-library.png'
import { useFavorites } from '../../contexts/FavoritesContext'

export const Header = () => {
    const { favorites } = useFavorites()

    return (
        <header className={styles.container}>
            <img src={OpenLibraryPng} alt="Open Library Image" className={styles.image} />
            <span className={styles.like}>
                <FontAwesomeIcon icon={faHeart} className={styles.heart} />
                {favorites.size}
            </span>
        </header>
    )
}