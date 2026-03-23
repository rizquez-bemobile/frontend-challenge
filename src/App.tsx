import { Route, Routes } from "react-router-dom"

import { FavoritesProvider } from "./app/context/FavoritesContext"
import { Header } from "./ui/components/Header"
import HomeView from "./ui/views/HomeView"
import BookDetailView from "./ui/views/BookDetailView"
import FavoriteBooksView from "./ui/views/FavoriteBooksView"

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/book/:title" element={<BookDetailView />} />
        <Route path="/book/favorites" element={<FavoriteBooksView />} />
      </Routes>
    </FavoritesProvider>
  )
}

export default App