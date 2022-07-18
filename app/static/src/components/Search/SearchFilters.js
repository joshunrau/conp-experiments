import React from "react";
import PropTypes from "prop-types";

import FilterDropdown from "./FilterDropdown";

const SearchFilters = ({ value, onChange }) => {
  return (
    <div className="d-flex">
      {Object.entries(value).map(([category, options]) => {
        return <FilterDropdown key={category} label={category} options={options} onChange={(name) => onChange(category, name)}/>;
      })}
    </div>
  );
};

SearchFilters.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchFilters;