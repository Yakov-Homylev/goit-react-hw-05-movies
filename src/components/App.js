import * as API from "../api/fetchMovieDataBase";

function App() {
  API.fetchTrandingMovies().then((data) => console.log(data));
  API.fetchMovieByName("spider").then((data) => console.log(data));
  API.fetchMovieDetails(557).then((data) => console.log(data));
  API.fetchMovieCredits(557).then((data) => console.log(data));
  API.fetchMovieReviews(557).then((data) => console.log(data));

  return <div></div>;
}

export default App;
