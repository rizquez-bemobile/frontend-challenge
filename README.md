# Frontend-Challenge (Custom Open Library)

A front-end application built with React that allows users to search for books using the Open Library API, view book details, and manage a list of favorites.

## Features

- Search for books by title or author
- View book details
- Manage favorites (add/remove)
- Preload cover images
- Handle loading and error states
- Clear separation of responsibilities by layers

## Application Flow

1. The user enters a search term
2. A request is sent to Open Library
3. The data is mapped to domain models
4. Valid results are filtered
5. Images are preloaded
6. Results are displayed
7. The user can:
    - View details
    - Add/remove favorites

## Key Technical Decisions

- Separation between APIs (DTOs) and the domain
- Use of mappers to transform data
- Hooks as use cases
- Decoupled context limited to favorites
- Use of react-router with state for navigation
- Image preloading to improve UX
- Avoid logic in components (declarative UI)

## Technology Stack

### Core Dependencies

- React 19
- React Router DOM
- TailwindCSS 4
- FontAwesome

### Tools

- Vite
- TypeScript
- ESLint

## Project structure

The project is organized using a layered architecture that clearly separates responsibilities:

```
Frontend-Challenge/
├── public
│   └── favicon.svg
├── src
│   ├── api
│   │   ├── contracts
│   │   │   ├── OpenLibraryBook.ts
│   │   │   ├── OpenLibrarySearchResponse.ts
│   │   │   ├── OpenLibrarySubject.ts
│   │   │   └── OpenLibraryWork.ts
│   │   ├── helpers
│   │   │   └── buildCoverUrl.ts
│   │   ├── mappers
│   │   │   ├── mapBookToBook.ts
│   │   │   ├── mapSubjectToBook.ts
│   │   │   └── mapWorkToDetails.ts
│   │   └── requests
│   │       ├── openLibraryDetails.ts
│   │       ├── openLibrarySearch.ts
│   │       └── openLibrarySubjectsWork.ts
│   ├── app
│   │   ├── context
│   │   │   └── FavoritesContext.tsx
│   │   └── hooks
│   │       ├── useBookCovers.ts
│   │       ├── useBooksBySubjects.ts
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
│   │       ├── CoversByBookWork.ts
│   │       └── SearchState.ts
│   ├── shared
│   │   ├── helpers
│   │   │   └── normalizeSubject.ts
│   │   └── constants.ts
│   ├── ui
│   │   ├── components
│   │   │   ├── BookCard.tsx
│   │   │   ├── BooksFound.tsx
│   │   │   ├── BooksSubject.tsx
│   │   │   ├── BooksSummary.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Modal.tsx
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

## Running the project

Install dependencies

```sh
npm install
```

Run in development mode

```sh
npm run dev
```

Build

```sh
npm run build
```

## Limitations

- Bookmarks are not saved (only stored in memory)
- Results are not paginated
- Direct dependency on an external API