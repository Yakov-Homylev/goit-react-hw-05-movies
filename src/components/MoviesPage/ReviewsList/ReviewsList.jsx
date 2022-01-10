import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../ReviewsItem/ReviewsItem";

function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            author={review.author}
            content={review.content}
            time={review.created_at}
          />
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewsList;
