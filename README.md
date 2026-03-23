# Frontend-Challenge (Custom Open Library)

## Project structure

```
Frontend-Challenge/
├── public
│   └── favicon.svg
├── src
│   ├── api
│   │   ├── contracts
│   │   │   ├── OpenLibraryBook.ts
│   │   │   ├── OpenLibrarySearchResponse.ts
│   │   │   └── OpenLibraryWork.ts
│   │   ├── mappers
│   │   │   ├── mapOpenLibraryToBook.ts
│   │   │   └── mapOpenLibraryToDetails.ts
│   │   ├── openLibraryCoverUrl.ts
│   │   ├── openLibraryDetails.ts
│   │   └── openLibrarySearch.ts
│   ├── app
│   │   ├── context
│   │   │   └── FavoritesContext.tsx
│   │   └── hooks
│   │       ├── useBookCovers.ts
│   │       ├── useBookSearch.ts
│   │       ├── useDetailsSearch.ts
│   │       └── useFilteredBooks.ts
│   ├── assets
│   │   ├── looking-for-a-book.jpg
│   │   └── open-library.png
│   ├── domain
│   │   ├── models
│   │   │   ├── Book.ts
│   │   │   └── Details.ts
│   │   └── types
│   │       ├── BookCardProps.ts
│   │       ├── BookLocationState.ts
│   │       ├── BooksFoundProps.ts
│   │       ├── BookSummaryProps.ts
│   │       ├── CoversByBookWork.ts
│   │       ├── FavoritesContextBooks.ts
│   │       ├── LoadingProps.ts
│   │       ├── SearchBarProps.ts
│   │       ├── SearchLayoutContext.ts
│   │       ├── SearchState.ts
│   │       └── UseBookSearchOptions.ts
│   ├── shared
│   │   └── constants.ts
│   ├── ui
│   │   ├── components
│   │   │   ├── BookCard.tsx
│   │   │   ├── BooksFound.tsx
│   │   │   ├── BooksSummary.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── layouts
│   │   │   └── SearchLayout.tsx
│   │   └── views
│   │       ├── BookDetailView.tsx
│   │       ├── BookResultsView.tsx
│   │       ├── FavoriteBooksView.tsx
│   │       └── HomeView.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
