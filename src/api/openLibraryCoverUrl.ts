import { OPEN_LIBRARY_COVER_BASE_URL } from "../shared/constants"

export const openLibraryCoverUrl = (coverId?: number, size: "S" | "M" | "L" = "L") => {
    if (!coverId)
        return ""
    
    return `${OPEN_LIBRARY_COVER_BASE_URL}/b/id/${coverId}-${size}.jpg`
}