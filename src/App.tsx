import { Route, Routes } from "react-router-dom"

import { FavoritesProvider } from "./app/context/FavoritesContext"
import { Header } from "./ui/components/Header"
import HomeView from "./ui/views/HomeView"
import BookDetailView from "./ui/views/BookDetailView"
import FavoriteBooksView from "./ui/views/FavoriteBooksView"
import SearchLayout from "./ui/layouts/SearchLayout"
import BookResultsView from "./ui/views/BookResultsView"

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route element={<SearchLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/book/results" element={<BookResultsView />} />
          <Route path="/book/favorites" element={<FavoriteBooksView />} />
        </Route>
        <Route path="/book/:title" element={<BookDetailView />} />
      </Routes>
    </FavoritesProvider>
  )
}

export default App