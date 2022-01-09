import React, { useState, useEffect } from "react";
import { fetchTrandingMovies } from "../api/fetchMovieDataBase";
import Gallery from "../components/Gallery/Gallery";

function HomePage() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then((data) => setGallery(data.results));
  }, []);

  return (
    <section>
      <h2>Trending Today</h2>
      <Gallery films={gallery} />
    </section>
  );
}

export default HomePage;
