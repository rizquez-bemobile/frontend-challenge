import type { Book } from "../models/Book"
import type { Details } from "../models/Details"

export type BookSummaryProps = {
    book: Book
    coverUrl: string
    details: Details | null
}