import type { OpenLibraryBook } from "./OpenLibraryBook"

export interface OpenLibrarySearchResponse {
    numFound: number
    docs: OpenLibraryBook[]
}