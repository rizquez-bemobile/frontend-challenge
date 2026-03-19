import type { OpenLibraryBook } from "../interfaces/OpenLibraryBook"

export type BooksFoundProps = {
    books: OpenLibraryBook[]
    coversByBookKey: Record<string, string>
    onRendered?: () => void
}