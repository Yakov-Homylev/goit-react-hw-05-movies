import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";

const HomePage = lazy(() => import("../../views/HomePage"));
const MoviesPage = lazy(() => import("../../views/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("../../views/MoviesDetailsPage"));
const MoviesSearchPage = lazy(() => import("../../views/MoviesSearchPage"));
const MovieCreditsPage = lazy(() => import("../../views/MovieCreditsPage"));
const MovieReviewsPage = lazy(() => import("../../views/MovieReviewsPage"));

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <MoviesPage />
            </Suspense>
          }>
          <Route
            index
            path=""
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MoviesSearchPage />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MoviesDetailsPage />
              </Suspense>
            }>
            <Route
              path="credits"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <MovieCreditsPage />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <MovieReviewsPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
