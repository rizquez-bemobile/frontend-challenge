import { useLayoutEffect, useState } from "react"

import type { CoversByBookWork } from "../../domain/types/CoversByBookWork"
import type { Book } from "../../domain/models/Book"
import { openLibraryCoverUrl } from "../../api/requests/openLibraryCoverUrl"

export const useBookCovers = (books: Book[]) => {
    const [coversByBookWork, setCoversByBookWork] = useState<CoversByBookWork>({})
    const [isLoadingCovers, setIsLoadingCovers] = useState(false)

    useLayoutEffect(() => {
        let isCancelled = false

        const preloadCovers = async () => {
            if (!books.length) {
                setCoversByBookWork({})
                setIsLoadingCovers(false)
                return
            }

            setIsLoadingCovers(true)

            const nextCovers: CoversByBookWork = {}

            const coverPromises = books.map((book) => {
                return new Promise<void>((resolve) => {
                    const coverUrl = openLibraryCoverUrl(book.coverId)

                    if (!coverUrl) {
                        nextCovers[book.work] = ""
                        resolve()
                        return
                    }

                    const image = new Image()

                    image.onload = () => {
                        nextCovers[book.work] = coverUrl
                        resolve()
                    }

                    image.onerror = () => {
                        nextCovers[book.work] = ""
                        resolve()
                    }

                    image.src = coverUrl
                })
            })

            await Promise.allSettled(coverPromises)

            if (isCancelled)
                return

            setCoversByBookWork(nextCovers)
            setIsLoadingCovers(false)
        }

        preloadCovers()

        return () => {
            isCancelled = true
        }
    }, [books])

    return {
        coversByBookWork,
        isLoadingCovers
    }
}