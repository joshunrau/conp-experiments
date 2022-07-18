import React from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";

const Search = () => {
  return (
    <div className="card flex-fill p-2">
      <SearchFilters/>
      <SearchBar/>
    </div>
  );
};

Search.propTypes = {};

export default Search;