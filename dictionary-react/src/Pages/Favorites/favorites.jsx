import "./favorites.css"
import { useNavigate } from "react-router-dom"
function Favorites({ favorites, setFavorites }) {
const navigate = useNavigate()

  const toggleFavorite = (obj) => {
    if (favorites.some(fav => fav.eng === obj.eng)) {
      setFavorites(favorites.filter(fav => fav.eng !== obj.eng))
    } else {
      setFavorites([...favorites, obj])
    }
  }

  return (
    <div>
      <h1 className="header">Favorites</h1>
      <p className="headline">Your saved words will appear here</p>

      {favorites.length === 0 ? (
        <p className="no-favorite">No favorites yet</p>
      ) : (
        favorites.map((obj, index) => (
          <div key={index} className="words-container"  onClick={() => navigate("/searchresult", { state: obj })}>
            <div className="words" >
              <div className="word">
                <h3>{obj.eng}</h3>
                <p>{obj.uzb}</p>
              </div>
              <i
                className={favorites.some(fav => fav.eng === obj.eng) ? "bi bi-star-fill" : "bi bi-star"}
                onClick={() => toggleFavorite(obj)}
              ></i>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Favorites