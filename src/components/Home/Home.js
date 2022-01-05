import { Link } from "react-router-dom"
import img from "../../images/star-wars-logo.png"

export default function Home(){
  return (
    <div className="home-container">
      <img src={img} alt="Star Wars Logo" className="home-logo" />
      <Link to="/films" className="home-link">Films</Link>
      <Link to="/planets" className="home-link">Planets</Link>
      <Link to="/species" className="home-link">Species</Link>
      <Link to="/vehicles" className="home-link">Vehicles</Link>
      <Link to="/starships" className="home-link">Starships</Link>
      <Link to="/people" className="home-link">Characters</Link>
    </div>
  )
}