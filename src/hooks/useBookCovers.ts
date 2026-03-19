import { useEffect, useState } from "react"

import type { OpenLibraryBook } from "../interfaces/OpenLibraryBook"
import { getOpenLibraryCoverUrl } from "../utils/getOpenLibraryCoverUrl"
import type { CoversByBookKey } from "../types/CoversByBookKey"

export const useBookCovers = (books: OpenLibraryBook[]) => {
    const [coversByBookKey, setCoversByBookKey] = useState<CoversByBookKey>({})
    const [isLoadingCovers, setIsLoadingCovers] = useState(false)

    useEffect(() => {
        let isCancelled = false

        const preloadCovers = async () => {
            if (!books.length) {
                setCoversByBookKey({})
                setIsLoadingCovers(false)
                return
            }

            setIsLoadingCovers(true)

            const nextCovers: CoversByBookKey = {}

            const coverPromises = books.map((book) => {
                return new Promise<void>((resolve) => {
                    const coverUrl = getOpenLibraryCoverUrl(book.cover_i)

                    if (!coverUrl) {
                        nextCovers[book.key] = ''
                        resolve()
                        return
                    }

                    const image = new Image()

                    image.onload = () => {
                        nextCovers[book.key] = coverUrl
                        resolve()
                    }

                    image.onerror = () => {
                        nextCovers[book.key] = ''
                        resolve()
                    }

                    image.src = coverUrl
                })
            })

            await Promise.allSettled(coverPromises)

            if (isCancelled)
                return

            setCoversByBookKey(nextCovers)
            setIsLoadingCovers(false)
        }

        preloadCovers()

        return () => {
            isCancelled = true
        }
    }, [books])

    return {
        coversByBookKey,
        isLoadingCovers
    }
}