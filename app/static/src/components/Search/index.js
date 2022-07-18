import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";

const Search = ({ filters }) => {

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


  return (
    <div className="card flex-fill p-2">
      <SearchFilters value={searchFilters} onChange={handleSearchFiltersChange} />
      <SearchBar value={searchText} onChange={(event) => setSearchText(event.target.value)} onSubmit={() => null}/>
    </div>
  );

};

Search.propTypes = {
  filters: PropTypes.object
};

Search.defaultProps = {
  filters: {
    modality: ["fMRI"],
    software: ["linux", "windows"],
    purpose: ["cognitive", "sensory", "motor"]
  }
};

export default Search;