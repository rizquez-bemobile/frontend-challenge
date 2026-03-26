import { useMemo, useState } from "react"

import type { Book } from "../../domain/models/Book"
import { openLibrarySubjectsWork } from "../../api/requests/openLibrarySubjectsWork"
import { normalizeSubject } from "../../shared/helpers/normalizeSubject"

type UseBooksBySubjectsParams = {
  subjects: string[]
  excludedWorks: string[]
}

export const useBooksBySubjects = ({ subjects, excludedWorks }: UseBooksBySubjectsParams) => {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessageSubjects, setErrorMessageSubjects] = useState<string | null>(null)

    const excludedWorksSet = useMemo(
      () => new Set(excludedWorks),
      [excludedWorks]
    )

  const normalizedSubjects = useMemo(() => {
    return Array.from(
      new Set(
        subjects
          .filter(Boolean)
          .map(normalizeSubject)
          .filter((subject) => subject.length > 0)
      )
    )
  }, [subjects])

  const handleSubjectBooks = async () => {
    if (normalizedSubjects.length === 0) {
      setBooks([])
      setErrorMessageSubjects(null)
      return
    }

    setIsLoading(true)
    setErrorMessageSubjects(null)

    try {
      const bookSubjects = await openLibrarySubjectsWork(normalizedSubjects)

      const filteredBooks = bookSubjects.filter(
        (book: Book) => !excludedWorksSet.has(book.work)
      )

      setBooks(filteredBooks)
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessageSubjects(error.message)
      } else {
        setErrorMessageSubjects("Unknown error")
      }

      setBooks([])
    } finally {
      setIsLoading(false)
    }
  }

  return {
    books,
    isLoading,
    errorMessageSubjects,
    handleSubjectBooks
  }
}