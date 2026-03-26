import { OPEN_LIBRARY_COVER_BASE_URL } from "../../shared/constants"

export const buildCoverUrl = (coverId?: number, size: "S" | "M" | "L" = "L"): string => {
    if (!coverId)
        return ""
    
    return `${OPEN_LIBRARY_COVER_BASE_URL}/b/id/${coverId}-${size}.jpg`
}