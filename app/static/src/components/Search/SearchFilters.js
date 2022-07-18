import React, { useState } from "react";
import PropTypes from "prop-types";

import FilterDropdown from "./FilterDropdown";

const SearchFilters = ({ filters }) => {

  const [activeFilters, setActiveFilters] = useState(() => {
    const initalState = {};
    Object.entries(filters).map(([key, options]) => {
      initalState[key] = Object.fromEntries(options.map(option => [option, false]));
    });
    return initalState;
  });

  const handleFilterChange = (category, name) => {
    setActiveFilters((prevState) => {
      const updatedState = Object.assign({}, prevState);
      updatedState[category][name] = !updatedState[category][name];
      return updatedState;
    });
  };

  return (
    <div className="d-flex">
      {Object.entries(activeFilters).map(([category, options]) => {
        return <FilterDropdown key={category} label={category} options={options} onFilterChange={(name) => handleFilterChange(category, name)}/>;
      })}
    </div>
  );
};

SearchFilters.propTypes = {
  filters: PropTypes.object
};

SearchFilters.defaultProps = {
  filters: {
    modality: ["fMRI"],
    software: ["linux", "windows"],
    purpose: ["cognitive", "sensory", "motor"]
  }
};

export default SearchFilters;