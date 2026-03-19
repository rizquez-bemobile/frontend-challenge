import { useEffect, useState } from 'react'

import type { OpenLibraryBook } from '../interfaces/OpenLibraryBook'
import { getOpenLibraryCoverUrl } from '../utils/getOpenLibraryCoverUrl'

export const useBooksReady = (books: OpenLibraryBook[]) => { // TODO: It works, but it is not the right way to preload images
    const [isImagesReady, setIsImagesReady] = useState(false)

    useEffect(() => {
        let cancelled = false

        const preloadImages = async () => {
            if (books.length === 0) {
                setIsImagesReady(true)
                return
            }

            setIsImagesReady(false)

            const imagePromises = books.map((book) => {
                const src = getOpenLibraryCoverUrl(book.cover_i)

                return new Promise<void>((resolve) => {
                    const img = new Image()

                    img.onload = () => resolve()
                    img.onerror = () => resolve() // It does not freeze the entire UI if a splash screen fails

                    img.src = src

                    if (img.complete)
                        resolve()
                })
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