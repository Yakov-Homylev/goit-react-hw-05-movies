import React from "react";
import { Link } from "react-router-dom";

function GalleryItem({ name, id }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <h3>{name}</h3>
      </Link>
    </li>
  );
}

export default GalleryItem;
