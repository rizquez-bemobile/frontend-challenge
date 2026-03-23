import type { Book } from "../../domain/models/Book"
import type { OpenLibraryBook } from "../contracts/OpenLibraryBook"

export const mapOpenLibraryToBook = (dto: OpenLibraryBook): Book => {
  return {
    work: dto.key,
    title: dto.title,
    authors: dto.author_name,
    firstPublishedYear: dto.first_publish_year,
    coverId: dto.cover_i,
    coverEditionKey: dto.cover_edition_key,
    lendingEdition: dto.lending_edition_s
  }
}