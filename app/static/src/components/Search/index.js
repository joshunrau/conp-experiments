import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";

const Search = ({ filters, onSubmitSearch }) => {

  const [searchFilters, setSearchFilters] = useState(() => {
    const initalState = {};
    Object.entries(filters).map(([key, options]) => {
      initalState[key] = Object.fromEntries(options.map(option => [option, false]));
    });
    return initalState;
  });

  const [searchText, setSearchText] = useState("");

  const handleSearchFiltersChange = (category, name) => {
    setSearchFilters((prevState) => {
      const updatedState = Object.assign({}, prevState);
      updatedState[category][name] = !updatedState[category][name];
      return updatedState;
    });
  };

  const handleSearchTextChange = (event) => setSearchText(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitSearch({
      filters: searchFilters,
      text: searchText
    });
  };

  return (
    <div className="d-flex flex-fill">
      <SearchFilters value={searchFilters} onChange={handleSearchFiltersChange} />
      <SearchBar value={searchText} onTextChange={handleSearchTextChange} onSubmit={handleOnSubmit}/>
    </div>
  );

};

Search.propTypes = {
  filters: PropTypes.object,
  onSubmitSearch: PropTypes.func
};

Search.defaultProps = {
  filters: {
    modality: ["fMRI"],
    software: ["linux", "windows"],
    purpose: ["cognitive", "sensory", "motor"]
  }
};

export default Search;