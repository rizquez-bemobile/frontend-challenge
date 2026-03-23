import type { Book } from "../models/Book"
import type { CoversByBookWork } from "./CoversByBookWork"

export type SearchLayoutContext = {
  filteredBooks: Book[]
  coversByBookWork: CoversByBookWork
  isSearching: boolean
  isLoadingCovers: boolean,
  errorMessage: string
}