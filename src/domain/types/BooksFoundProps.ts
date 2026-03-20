import type { Book } from "../models/Book"

export type BooksFoundProps = {
    books: Book[]
    coversByBookId: Record<string, string>
    onRendered?: () => void
}