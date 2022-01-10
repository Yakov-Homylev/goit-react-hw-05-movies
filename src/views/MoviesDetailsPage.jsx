import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";
import { fetchMovieDetails } from "../api/fetchMovieDataBase";

const FULL_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

function MoviesDetailsPage(props) {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(id)
      .then((data) => setFilm(data))
      .catch((error) => console.log(error.message));
  }, [id]);

  const date = new Date(film.release_date);

  const goBack = () => {
    if (!location.state) {
      navigate("/");
      return;
    }
    navigate(-1);
  };

  return (
    <div>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <h2>
        {film.original_title}
        <span>{`(${date.getFullYear(film.release_date)})`}</span>
      </h2>
      <h3>User score: {film.vote_average}</h3>
      <h3>Overview</h3>
      <p>{film.overview}</p>
      {film.poster_path && (
        <img
          src={`${FULL_IMAGE_PATH}${film.poster_path}`}
          alt={film.title}
          width="300"
          style={{ marginBottom: "10px" }}
        />
      )}
      <NavLink to="credits" style={{ padding: "10px" }}>
        Credits
      </NavLink>
      <NavLink to="reviews" style={{ padding: "10px" }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
}

export default MoviesDetailsPage;

// adult: false
// backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
// belongs_to_collection: {id: 531241, name: 'Spider-Man (Avengers) Collection', poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg', backdrop_path: '/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg'}
// budget: 200000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.spidermannowayhome.movie"
// id: 634649
// imdb_id: "tt10872600"
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 7981.605
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2021-12-15"
// revenue: 1394738195
// runtime: 148
// spoken_languages: (2) [{…}, {…}]
// status: "Released"
// tagline: "The Multiverse unleashed."
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8.4
// vote_count: 3765
