import { useEffect, useState } from "react"

import type { CoversByBookId } from "../../domain/types/CoversByBookId"
import { openLibraryCoverUrl } from "../../api/openLibraryCoverUrl"
import type { Book } from "../../domain/models/Book"

export const useBookCovers = (books: Book[]) => {
    const [coversByBookId, setCoversByBookId] = useState<CoversByBookId>({})
    const [isLoadingCovers, setIsLoadingCovers] = useState(false)

    useEffect(() => {
        let isCancelled = false

        const preloadCovers = async () => {
            if (!books.length) {
                setCoversByBookId({})
                setIsLoadingCovers(false)
                return
            }

            setIsLoadingCovers(true)

            const nextCovers: CoversByBookId = {}

            const coverPromises = books.map((book) => {
                return new Promise<void>((resolve) => {
                    const coverUrl = openLibraryCoverUrl(book.coverId)

                    if (!coverUrl) {
                        nextCovers[book.id] = ''
                        resolve()
                        return
                    }

                    const image = new Image()

                    image.onload = () => {
                        nextCovers[book.id] = coverUrl
                        resolve()
                    }

                    image.onerror = () => {
                        nextCovers[book.id] = ''
                        resolve()
                    }

                    image.src = coverUrl
                })
            })

            await Promise.allSettled(coverPromises)

            if (isCancelled)
                return

            setCoversByBookId(nextCovers)
            setIsLoadingCovers(false)
        }

        preloadCovers()

        return () => {
            isCancelled = true
        }
    }, [books])

    return {
        coversByBookId,
        isLoadingCovers
    }
}