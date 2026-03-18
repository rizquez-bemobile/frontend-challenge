import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.css'
import OpenLibraryPng from '@/assets/images/open-library.png'

export const Header = () => {
    return (
        <header className={styles.container}>
            <img src={OpenLibraryPng} alt="Open Library Image" className={styles.image} />
            <span className={styles.like}>
                <FontAwesomeIcon icon={faHeart} className={styles.heart} />
                0
            </span>
        </header>
    )
}