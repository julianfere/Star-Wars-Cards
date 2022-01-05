import { useEffect, useState } from "react";
import PersonItem from "./PersonItem";
import { fetchApi } from "../../api/swapi";
export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    let data = await fetchApi("/all.json")
    setPeople(data)
  };

  useEffect(() => {
    getPeople();
  }, []);

  const peopleList = people.map((person,id) => {{return <PersonItem key={id+1} person={person} />}})

  return (
    <>
      {peopleList}
    </>
  )
}