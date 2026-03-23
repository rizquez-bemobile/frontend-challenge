import type { Details } from "../models/Details"

export type BookSummaryProps = {
    work: string
    title: string
    coverUrl: string
    details: Details | null
}