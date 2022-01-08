const API_KEY = "8db1c432c435273f97e2a82d2bf67ada";

export function fetchTrandingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}

export function fetchMovieByName(query, page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  ).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}

export function fetchMovieDetails(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}

export function fetchMovieCredits(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}

export function fetchMovieReviews(id, page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}
