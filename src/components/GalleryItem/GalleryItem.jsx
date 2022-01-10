import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function GalleryItem({ name, id }) {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={location}>
        <h3>{name}</h3>
      </Link>
    </li>
  );
}

GalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GalleryItem;
