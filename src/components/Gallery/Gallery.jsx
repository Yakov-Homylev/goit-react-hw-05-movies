import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";
import { List } from "./Gallery.styled";

function Gallery({ films }) {
  return (
    <List>
      {films.map((film) => (
        <GalleryItem key={film.id} name={film.title} id={film.id} />
      ))}
    </List>
  );
}

Gallery.propTypes = {
  films: PropTypes.array,
};

export default Gallery;
