import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return (
       <nav>
        <h1 className="name">SAM-WISDOMS AMENYENU</h1>
        <ul className="nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
       </nav>
    )
}

export default Header