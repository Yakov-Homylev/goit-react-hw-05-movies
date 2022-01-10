import React from "react";
import PropTypes from "prop-types";

function ReviewsItem({ author, content, time }) {
  const date = new Date(time);

  return (
    <li>
      <h4>
        Author: {author} <span>At: {date.toDateString()}</span>
      </h4>
      <p>{content}</p>
    </li>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
};

export default ReviewsItem;
