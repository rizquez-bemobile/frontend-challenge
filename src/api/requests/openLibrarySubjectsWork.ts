import type { Book } from "../../domain/models/Book"
import { OPEN_LIBRARY_BASE_URL } from "../../shared/constants"
import type { OpenLibrarySubject } from "../contracts/OpenLibrarySubject"
import { mapSubjectWorkToBook } from "../mappers/mapSubjectToBook"

type OpenLibrarySubjectsResponse = {
  works?: OpenLibrarySubject[]
}

export const openLibrarySubjectsWork = async (subjects: string[]): Promise<Book[]> => {
  const responses = await Promise.all(subjects.map(subject =>
    fetch(`${OPEN_LIBRARY_BASE_URL}/subjects/${encodeURIComponent(subject)}.json?limit=5`)
  ))

  const books: Book[] = []

  for (const response of responses) {
    if (!response.ok) 
      continue

    const data: OpenLibrarySubjectsResponse = await response.json()
    const works = data.works ?? []

    for (const work of works) {
      books.push(mapSubjectWorkToBook(work))
    }
  }

  return Array.from(
    new Map(books.map((book) => [book.work, book])).values()
  )
}