import React from "react";

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

export default SearchForm;
