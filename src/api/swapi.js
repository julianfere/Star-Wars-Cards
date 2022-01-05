export const fetchSwapi = async (uri) => {
  const res = await fetch(`https://swapi.dev/api/${uri}`);
  const data = await res.json();
  return data.results;
}


export const fetchApi = async (uri) => {
  const res = await fetch(`https://akabab.github.io/starwars-api/api/${uri}`);
  const data = await res.json();
  return data;
}