# Frontend-Challenge (Custom Open Library)

## Project structure

```
Frontend-Challenge/
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├──images
│   │   │  └── open-library.png
│   │   └── styles
│   │       └── reset.css
│   ├── components
│   │   ├── BookCard
│   │   │   ├── BookCard.module.css
│   │   │   └── BookCard.tsx
│   │   ├── BooksFound
│   │   │   ├── BooksFound.module.css
│   │   │   └── BooksFound.tsx
│   │   ├── Header
│   │   │   ├── Header.module.css
│   │   │   └── Header.tsx
│   │   ├── Loading
│   │   │   ├── Loading.module.css
│   │   │   └── Loading.tsx
│   │   └── SearchBar
│   │       ├── SearchBar.module.css
│   │       └── SearchBar.tsx
│   ├── hooks
│   │   ├── useBookSearch.ts
│   │   └── useFilteredBooks.ts
│   ├── interfaces
│   │   ├── OpenLibraryBook.ts
│   │   └── OpenLibrarySearchResponse.ts
│   ├── services
│   │   └── openLibraryService.ts
│   ├── types
│   │   ├── BookCardProps.ts
│   │   ├── BooksFoundProps.ts
│   │   ├── LoadingProps.ts
│   │   └── SearchBarProps.ts
│   ├── utils
│   │   └── getOpenLibraryCoverUrl.ts
│   ├── views
│   │   └── HomeView.tsx
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
