export const getOpenLibraryCoverUrl = (coverId?: number, size: 'S' | 'M' | 'L' = 'M') => {
    if (!coverId)
        return ''
    
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`
}