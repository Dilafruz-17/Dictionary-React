import { useNavigate, useLocation } from "react-router-dom"
import "./search-result.css"

function SearchResult({ favorites, setFavorites }){

    const navigate = useNavigate()
    const location = useLocation()
    const word = location.state

    const toggleFavorite = (obj) => {
    if (favorites.some(fav => fav.eng === obj.eng)) {
      setFavorites(favorites.filter(fav => fav.eng !== obj.eng))
    } else {
      setFavorites([...favorites, obj])
    }
  }

    return(
        <div>
            <div className="narrow" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left"></i>
            </div>
            <div className="search-word-result">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1 className="eng-word">{word.eng}</h1>
                    <i
                        className={favorites.some(fav => fav.eng === word.eng) ? "bi bi-star-fill" : "bi bi-star"}
                        onClick={() => toggleFavorite(word)}
                        
                    ></i>
                </div>
                <hr style={{ borderTop: "1px solid #666667" }} />
                <p className="uzb-word"> <span>Tarjima :</span> {word.uzb}</p>
                <hr style={{ borderTop: "1px solid #666667" }} />
                <p className="tran"> <span>Transcription :</span> {word.tran}</p>
                <hr style={{ borderTop: "1px solid #666667" }} />
                <p className="exam"><span>Example:</span> {word.exam}</p>

            </div>
        </div>
    )
}

export default SearchResult