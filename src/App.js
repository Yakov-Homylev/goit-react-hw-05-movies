import fetchTrandingMovies from "./api/fetchTrandingMovies";

function App() {
  fetchTrandingMovies().then((data) => console.log(data));

  return <div></div>;
}

export default App;
