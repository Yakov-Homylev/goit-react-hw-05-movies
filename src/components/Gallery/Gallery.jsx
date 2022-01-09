import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function Gallery({ films }) {
  return (
    <ul>
      {films.map((film) => (
        <GalleryItem key={film.id} name={film.title} id={film.id} />
      ))}
    </ul>
  );
}

export default Gallery;
