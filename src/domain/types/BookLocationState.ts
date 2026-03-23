import type { Book } from "../models/Book"

export type BookLocationState = {
    book: Book
    coverUrl?: string
}