import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./search.css"

function Search({ favorites, setFavorites }) {
  const navigate = useNavigate()
  const [word, setWord] = useState("");
  const [vocabulary, setVocabulary] = useState([])

  useEffect(() => {
    if (!word) {
      setVocabulary([])
      return;
    }

    const letter = word[0].toLowerCase()
    import(`../../vocabularies/${letter}.js`)
      .then(module => setVocabulary(module.default))
      .catch(() => setVocabulary([]))
  }, [word])

  // Yulduzcha toggle funksiyasi
  const toggleFavorite = (obj) => {
    if (favorites.some(fav => fav.eng === obj.eng)) {
      setFavorites(favorites.filter(fav => fav.eng !== obj.eng))
    } else {
      setFavorites([...favorites, obj])
    }
  }

  const filtered = word === "" ? [] : vocabulary.filter(obj =>
    obj.eng.toLowerCase().startsWith(word.toLowerCase())
  )

  return (
    <div>
      <h1 className="header">Search</h1>
      <div className="search-box">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Enter word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>

      <div>
        {filtered.map((obj, index) => (
          <div className="search-words-container" key={obj.eng + index}>
            <div className="search-words" onClick={() => navigate("/searchresult", { state: obj })}>
              <div className="word">
                <h3>{obj.eng}</h3>
                <p>{obj.uzb}</p>
              </div>
              <i
                className={favorites.some(fav => fav.eng === obj.eng) ? "bi bi-star-fill" : "bi bi-star"}
                onClick={(e) => {
                  e.stopPropagation() // parent click ni bloklash
                  toggleFavorite(obj)
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search