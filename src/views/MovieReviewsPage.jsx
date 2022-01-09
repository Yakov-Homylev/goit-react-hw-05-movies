import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../api/fetchMovieDataBase";

function MovieReviewsPage() {
  const [reviews, setReviews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then((data) => setReviews(data.results));
  }, [id]);

  console.log(reviews);

  return (
    <div>
      <p>HAHAHAHAHHA</p>
    </div>
  );
}

export default MovieReviewsPage;
