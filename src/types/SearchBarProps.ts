export type SearchBarProps = {
    searchTerm: string
    results: number
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    handleSearch: () => Promise<void>
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}