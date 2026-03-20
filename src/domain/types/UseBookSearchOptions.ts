import type { SearchState } from "./SearchState"

export type UseBookSearchOptions = {
    initialSearchState?: SearchState | null
    persistSearchState?: (state: SearchState) => void
}