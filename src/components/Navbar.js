import img from "../images/star-wars-logo.png";
import  { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/home">
        <img src={img} alt="Star Wars Logo" className="nav-logo" />
      </Link>
      <ul className="nav-links">
        <Link className="nav-link" to="/people"><li>Characters</li></Link>
        <Link className="nav-link" to="/planets"><li>Planets</li></Link>
        <Link className="nav-link" to="/starships"><li>Starship</li></Link>
        <Link className="nav-link" to="/vehicles"><li>Vehicles</li></Link>
        <Link className="nav-link" to="/species"><li>Species</li></Link>
        <Link className="nav-link" to="/films"><li>Films</li></Link>
      </ul>
    </nav>
  )
}