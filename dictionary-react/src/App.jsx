import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"
import "./App.css"
import Nav from "./components/navbar/nav.jsx"
import SearchResult from "./Pages/Result/search-result.jsx"
import Favorites from "./Pages/Favorites/favorites.jsx"
import Setting from "./Pages/Setting/setting.jsx"
import Search from "./Pages/Search/search.jsx"

function App() {
  const [favorites, setFavorites] = useState([])
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme)
  }, [theme])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/setting" element={<Setting theme={theme} setTheme={setTheme} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/searchresult" element={<SearchResult />} />
      </Routes>
      <Nav />
    </Router>
  )
}

export default App