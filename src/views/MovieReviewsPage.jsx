import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../api/fetchMovieDataBase";
import ReviewsList from "../components/MoviesPage/ReviewsList/ReviewsList";

function MovieReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then((data) => setReviews(data.results));
  }, [id]);

  return (
    <div>
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default MovieReviewsPage;
