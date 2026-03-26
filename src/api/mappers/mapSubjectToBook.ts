import type { Book } from "../../domain/models/Book"
import type { OpenLibrarySubject } from "../contracts/OpenLibrarySubject"

export const mapSubjectWorkToBook = (dto: OpenLibrarySubject): Book => {
  return {
    work: dto.key,
    title: dto.title,
    authors: dto.authors?.map(author => author.name).join(", "),
    firstPublishedYear: dto.first_publish_year,
    coverId: dto.cover_id,
    coverEditionKey: dto.cover_edition_key,
    lendingEdition: dto.lending_edition_s
  }
}