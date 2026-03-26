export interface OpenLibrarySubject {
  key: string
  title?: string
  cover_id?: number
  lending_edition_s?: string
  cover_edition_key?: string
  authors?: {
    key: string
    name: string
  }[]
  first_publish_year?: number
}