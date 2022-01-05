import { Link } from "react-router-dom";

export default function PersonItem({id, person}) {
  return (
    <div className="card">
      <Link className='card-link' to={`/people/${id}`}><span className='card-item'>{person.name}</span></Link>
    </div>
  )
}