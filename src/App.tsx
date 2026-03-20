import { FavoritesProvider } from "./app/context/FavoritesContext"
import { Header } from "./ui/components/Header"
import HomeView from "./ui/views/HomeView"

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <HomeView />
    </FavoritesProvider>
  )
}

export default App