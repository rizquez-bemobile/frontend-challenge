import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './SearchBar.module.css'
import type { SearchBarProps } from '../../types/SearchBarProps'

export const SearchBar = ({ searchTerm, results, setSearchTerm, handleSearch, handleKeyDown }: SearchBarProps) => {
    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <button 
                    type="button" 
                    className={styles.button} 
                    onClick={handleSearch}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    name="search"
                    type="text"
                    placeholder="Search for a book or an author..."
                    className={styles.input}
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <p className={styles.results}>{results} RESULTS</p>
        </section>
    )
}