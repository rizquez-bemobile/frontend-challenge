import type { Book } from "../models/Book"

export type BooksFoundProps = {
    books: Book[]
    coversByBookWork: Record<string, string>
    onRendered?: () => void
}