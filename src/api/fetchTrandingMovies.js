const API_KEY = "8db1c432c435273f97e2a82d2bf67ada";

function fetchTrandingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}

export default fetchTrandingMovies;
