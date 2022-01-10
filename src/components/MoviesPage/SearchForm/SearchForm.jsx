import React from "react";
import PropTypes from "prop-types";

function SearchForm({ newSearch }) {
  const onFormSumbit = (e) => {
    e.preventDefault();

    newSearch(e.target.keyword.value.toLowerCase());
  };

  return (
    <form onSubmit={onFormSumbit}>
      <input type="text" name="keyword" />
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  newSearch: PropTypes.func,
};

export default SearchForm;
