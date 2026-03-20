import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import type { SearchBarProps } from "../../domain/types/SearchBarProps"

export const SearchBar = ({ searchTerm, results, setSearchTerm, handleSearch, handleKeyDown }: SearchBarProps) => {
    return (
        <section className="px-20 py-12.5">
            <div className="flex items-center gap-5 border-b-2 border-brand-black pb-2.5">
                <button
                    type="button"
                    className="cursor-pointer bg-transparent p-0 text-brand-black"
                    onClick={handleSearch}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

                <input
                    name="search"
                    type="text"
                    placeholder="Search for a book or an author..."
                    className="w-full border-none bg-transparent text-base font-normal uppercase text-brand-grey outline-none"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <p className="pt-5 text-xs font-normal text-brand-black">
                {results} RESULTS
            </p>
        </section>
    )
}