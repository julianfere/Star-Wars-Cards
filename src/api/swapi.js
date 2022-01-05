export const fetchApi = async (uri) => {
  const res = await fetch(`https://swapi.dev/api/${uri}`);
  const data = await res.json();
  return data.results;
}
