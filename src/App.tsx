import { Header } from "./components/Header/Header"
import { FavoritesProvider } from "./contexts/FavoritesContext"
import HomeView from "./views/HomeView"

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <HomeView />
    </FavoritesProvider>
  )
}

export default App