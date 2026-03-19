import { useLayoutEffect, useState } from 'react'

import type { OpenLibraryBook } from '../interfaces/OpenLibraryBook'
import { getOpenLibraryCoverUrl } from '../utils/getOpenLibraryCoverUrl'

const IMAGE_PRELOAD_TIMEOUT_MS = 3000

export const useBooksReady = (books: OpenLibraryBook[]) => {
    const [isImagesReady, setIsImagesReady] = useState(false)

    useLayoutEffect(() => {
        let cancelled = false

        const preloadImage = (src: string) => {
            return new Promise<void>((resolve) => {
                const img = new Image()

                const timeoutId = window.setTimeout(() => {
                    cleanup()
                    resolve()
                }, IMAGE_PRELOAD_TIMEOUT_MS)

                const cleanup = () => {
                    window.clearTimeout(timeoutId)
                    img.onload = null
                    img.onerror = null
                }

                img.onload = () => {
                    cleanup()
                    resolve()
                }

                img.onerror = () => {
                    cleanup()
                    resolve()
                }

                img.src = src

                if (img.complete) {
                    cleanup()
                    resolve()
                }
            })
        }

        const preloadImages = async () => {
            if (books.length === 0) {
                setIsImagesReady(true)
                return
            }

            setIsImagesReady(false)

            const imagePromises = books.map((book) => {
                const src = getOpenLibraryCoverUrl(book.cover_i)

                if (!src)
                    return Promise.resolve()

                return preloadImage(src)
            })

            await Promise.all(imagePromises)

            if (!cancelled)
                setIsImagesReady(true)
        }

        preloadImages()

        return () => {
            cancelled = true
        }
    }, [books])

    return {
        isImagesReady
    }
}