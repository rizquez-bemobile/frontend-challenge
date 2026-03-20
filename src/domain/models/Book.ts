export interface Book {
  id: string
  title?: string
  authors?: string[]
  firstPublishedYear?: number
  coverId?: number
  coverEditionKey?: string
  lendingEdition?: string
}