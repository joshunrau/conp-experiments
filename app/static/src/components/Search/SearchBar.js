import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <form className="d-flex flex-fill" role="search">
      <input className="form-control mx-1" type="search" value={value} placeholder="Search" onChange={onChange}/>
      <button className="btn btn-outline-secondary" type="submit" onClick={onSubmit}>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;