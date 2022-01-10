import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../api/fetchMovieDataBase";
import CastList from "../components/MoviesPage/CastList/CastList";

function MovieCreditsPage() {
  const { id } = useParams();

  const [credits, setCredits] = useState([]);
  useEffect(() => {
    fetchMovieCredits(id).then((data) => setCredits(data.cast));
  }, [id]);

  return (
    <div>
      <CastList actors={credits} />
    </div>
  );
}

export default MovieCreditsPage;
