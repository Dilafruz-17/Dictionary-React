import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div>
            <nav>
                <Link to="/" className="nav-item">
                <i class="bi bi-search"></i>
                    <div>Search</div>
                </Link>
                 
                <Link to="/favorites" className="nav-item">
                    <i class="bi bi-star"></i>
                    <div>Favorites</div>
                </Link>

                <Link to="/setting" className="nav-item">
                    <i class="bi bi-gear"></i>
                    <div>Setting</div>
                </Link>
            </nav>
        </div>
    )
}

export default Nav