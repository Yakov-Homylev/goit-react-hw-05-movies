import React, { useState, useEffect } from "react";

import SearchForm from "../components/MoviesPage/SearchForm/SearchForm";
import Gallery from "../components/Gallery/Gallery";
import { fetchMovieByName } from "../api/fetchMovieDataBase";
import { useLocation, useNavigate } from "react-router-dom";

function MoviesSearchPage() {
  const [searchWord, setSearchWord] = useState("");
  const [gallery, setGallery] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (location.search) {
      setSearchWord(location.search.slice(3));
    }
  }, [location]);

  useEffect(() => {
    if (!searchWord) {
      return;
    }

    fetchMovieByName(searchWord).then((data) => {
      console.log(data);
      navigate(`?q=${searchWord}`);

      setGallery(data.results);
    });
  }, [searchWord, navigate]);

  return (
    <>
      <SearchForm newSearch={setSearchWord} />
      <Gallery films={gallery} />
    </>
  );
}

export default MoviesSearchPage;
