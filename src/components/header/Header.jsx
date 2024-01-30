import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return (
       <nav>
        <h1 className="name">SAM-WISDOMS AMENYENU</h1>
        <ul className="nav-items">
            <li className="nav-link"><Link to="/" className="active">Home</Link></li>
            <li className="nav-link"><Link to="/about">About</Link></li>
            <li className="nav-link"><Link to="/blog">Blog</Link></li>
            <li className="nav-link"><Link to="/projects">Projects</Link></li>
            <li className="nav-link"><Link to="/contact">Contact</Link></li>
        </ul>
       </nav>
    )
}

export default Header