import type { Book } from "../models/Book"

export type SearchState = {
    searchTerm: string
    books: Book[]
}