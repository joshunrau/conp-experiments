import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onTextChange, onSubmit }) => {
  return (
    <form className="d-flex flex-fill" role="search" onSubmit={onSubmit}>
      <input className="form-control mx-1" type="search" value={value} placeholder="Search" onChange={onTextChange}/>
      <button className="btn btn-outline-secondary" type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;