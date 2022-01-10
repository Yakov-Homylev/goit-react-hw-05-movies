import React from "react";
import PropTypes from "prop-types";
import CastItem from "../CastItem/CastItem";

function CastList({ actors }) {
  return (
    <ul>
      {actors &&
        actors.map((actor) => (
          <CastItem
            key={actor.id}
            actorName={actor.original_name}
            character={actor.character}
            photo={actor.profile_path}
          />
        ))}
    </ul>
  );
}

CastList.propTypes = {
  actors: PropTypes.array,
};

export default CastList;
