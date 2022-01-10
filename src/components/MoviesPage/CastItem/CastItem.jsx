import React from "react";
import PropTypes from "prop-types";

const FULL_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

function CastItem({ actorName, character, photo }) {
  return (
    <li>
      {photo && (
        <img src={`${FULL_IMAGE_PATH}${photo}`} alt={actorName} width="150" />
      )}
      <h4>Actor: {actorName}</h4>
      <h4>Character: {character}</h4>
    </li>
  );
}

CastItem.propTypes = {
  actorName: PropTypes.string,
  character: PropTypes.string,
  photo: PropTypes.string,
};

export default CastItem;
