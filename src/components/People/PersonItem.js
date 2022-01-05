import { useState, useEffect } from "react";

export default function PersonItem({person}) {
  const [error, setError] = useState(false);
  const handleError = () => {
    setError(true)
  };

  const personComponent = () => {
    return (
    <div className="card">
      <img src={person.image} alt={person.name} />
      <a className='card-link' href={person.wiki} target="_blank" rel="noreferrer noopener"><span className='card-item'>{person.name}</span></a>
    </div>
    )
  }

  const fetchImg = async () => {
    const res = await fetch(person.image);
    if (!res.ok) {
      handleError();
    }
  };

  useEffect(() => {
    fetchImg();
  }, []);

  
  return (
    error ? null : personComponent()
  )
}