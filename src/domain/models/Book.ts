export interface Book { // TODO: Parameters cannot be undefined!
  id: string
  title?: string
  authors?: string[]
  firstPublishedYear?: number
  coverId?: number
  coverEditionKey?: string
  lendingEdition?: string
}