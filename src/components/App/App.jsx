import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../views/HomePage";
import MoviesPage from "../../views/MoviesPage";
import MoviesDetailsPage from "../../views/MoviesDetailsPage";
import MoviesSearchPage from "../../views/MoviesSearchPage";
import MovieCreditsPage from "../../views/MovieCreditsPage";
import MovieReviewsPage from "../../views/MovieReviewsPage";

function App() {
  // API.fetchTrandingMovies().then((data) => console.log(data));
  // API.fetchMovieByName("spider").then((data) => console.log(data));
  // API.fetchMovieDetails(557).then((data) => console.log(data));
  // API.fetchMovieCredits(557).then((data) => console.log(data));
  // API.fetchMovieReviews(557).then((data) => console.log(data));

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route index path="" element={<MoviesSearchPage />} />
          <Route path=":id" element={<MoviesDetailsPage />}>
            <Route path="credits" element={<MovieCreditsPage />} />
            <Route path="reviews" element={<MovieReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
