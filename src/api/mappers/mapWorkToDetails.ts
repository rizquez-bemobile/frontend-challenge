import type { Details } from "../../domain/models/Details"
import type { OpenLibraryWork } from "../contracts/OpenLibraryWork"

export const mapWorkToDetails = (dto: OpenLibraryWork): Details => {
    const raw = typeof dto.description === "string" 
        ? dto.description
        : dto.description?.value ?? "No description was found for this book"

    const parts = raw.split("----------")
    const description = parts[0].replace(/"/g, "").replace(/-/g, "")

    return {
        description: description,
        firstPublishDate: dto.first_publish_date ?? "No publication history available"
    }
}