import type { Book } from "../../domain/models/Book"
import type { CoversByBookWork } from "../../domain/types/CoversByBookWork"
import { BookCard } from "./BookCard"

type BooksSubjectProps = {
  subjectBooks: Book[]
  coversByBookWork: CoversByBookWork
}

export const BooksSubject = ({ subjectBooks, coversByBookWork }: BooksSubjectProps) => {
  const renderedBooks = subjectBooks.map((book) => (
    <BookCard
      key={book.work}
      book={book}
      coverUrl={coversByBookWork[book.work]}
    />
  ))

  return (
    <section className="flex min-w-0 flex-col gap-10 pt-10 pb-20 min-[1400px]:mx-60 max-[600px]:gap-4">
      <h1 className="text-3xl font-semibold">Books on the same topic</h1>
      <div className="w-full min-w-0 overflow-x-auto">
        {subjectBooks.length > 0 ? (
          <div className="flex w-max gap-5">
            {renderedBooks}
          </div>
        ) : (
          <p className="text-2xl">Books not found</p>
        )}
      </div>
    </section>
  )
}