import type { Details } from "../../domain/models/Details"
import { removeHyphensDoubleQuotes } from "../../shared/helpers/formatters"
import type { OpenLibraryWork } from "../contracts/OpenLibraryWork"

export const mapOpenLibraryToDetails = (dto: OpenLibraryWork): Details => {
    const raw = typeof dto.description === 'string' 
        ? dto.description
        : dto.description?.value ?? 'No description was found for this book'

    const parts = raw.split("----------")

    return {
        description: removeHyphensDoubleQuotes(parts[0]),
        firstPublishDate: dto.first_publish_date ?? 'No publication history available'
    }
}