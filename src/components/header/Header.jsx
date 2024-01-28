import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return (
       <nav>
        <h1 className="name">Sam-Wisdoms Amenyenu</h1>
        <ul className="nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"></Link></li>
            <li><Link to="/blog"></Link></li>
            <li><Link to="/projects"></Link></li>
            <li><Link to="/contact"></Link></li>
        </ul>
       </nav>
    )
}

export default Header