import { Route, Routes } from "react-router-dom"

import { FavoritesProvider } from "./app/context/FavoritesContext"
import { Header } from "./ui/components/Header"
import HomeView from "./ui/views/HomeView"
import BookDetailView from "./ui/views/BookDetailView"

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/book/:title" element={<BookDetailView />} />
      </Routes>
    </FavoritesProvider>
  )
}

export default App