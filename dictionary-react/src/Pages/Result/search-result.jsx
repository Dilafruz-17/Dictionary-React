import { useNavigate, useLocation } from "react-router-dom"
import "./search-result.css"

function SearchResult(){

    const navigate = useNavigate()
    const location = useLocation()
    const word = location.state

    return(
        <div>
            <div className="narrow" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left"></i>
            </div>
            <div className="search-word-result">
                <h1 className="eng-word">{word.eng}</h1>
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