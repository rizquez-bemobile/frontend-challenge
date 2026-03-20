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
│   │   │   └── OpenLibrarySearchResponse.ts
│   │   ├── mappers
│   │   │   └── mapOpenLibraryToBook.ts
│   │   ├── openLibraryCoverUrl.ts
│   │   └── openLibrarySearch.ts
│   ├── app
│   │   ├── context
│   │   │   └── FavoritesContext.tsx
│   │   └── hooks
│   │       ├── useBookCovers.ts
│   │       ├── useBookSearch.ts
│   │       └── useFilteredBooks.ts
│   ├── assets
│   │   ├── looking-for-a-book.jpg
│   │   └── open-library.png
│   ├── domain
│   │   ├── models
│   │   │   └── Book.ts
│   │   └── types
│   │       ├── BookCardProps.ts
│   │       ├── BooksFoundProps.ts
│   │       ├── CoversByBookKey.ts
│   │       ├── FavoritesContextBooks.ts
│   │       ├── LoadingProps.ts
│   │       ├── SearchBarProps.ts
│   │       ├── SearchState.ts
│   │       └── UseBookSearchOptions.ts
│   ├── shared
│   │   └── constants.ts
│   ├── ui
│   │   ├── components
│   │   │   ├── BookCard.tsx
│   │   │   ├── BooksFound.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── SearchBar.tsx
│   │   └── views
│   │       ├── BookDetailView.tsx
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
