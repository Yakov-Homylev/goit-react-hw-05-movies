import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../api/fetchMovieDataBase";

function MovieCreditsPage() {
  const { id } = useParams();

  const [credits, setCredits] = useState({});
  useEffect(() => {
    fetchMovieCredits(id).then((data) => setCredits(data.cast));
  }, [id]);

  console.log(credits);

  return (
    <div>
      <p>HOHOHOHO</p>
    </div>
  );
}

export default MovieCreditsPage;
