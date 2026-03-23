import type { Details } from "../../domain/models/Details"
import type { OpenLibraryWork } from "../contracts/OpenLibraryWork"

export const mapOpenLibraryToDetails = (dto: OpenLibraryWork): Details => { // TODO: Improve the way text is filtered
    const description =
        (typeof dto.description === 'string'
            ? dto.description
            : dto.description?.value ?? 'No description was found for this book').split("----------")[0]

    return {
        description,
        firstPublishDate: dto.first_publish_date ?? 'No publication date available'
    }
}