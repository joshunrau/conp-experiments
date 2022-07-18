import React from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown";
import FilterCheckbox from "./FilterCheckbox";

const FilterDropdown = ({ label, options, onFilterChange }) => {
  return (
    <Dropdown label={label}>
      {Object.entries(options).map(([key, value]) => {
        const handleCheckboxChange = () => onFilterChange(key);
        return <FilterCheckbox key={key} label={key} checked={value} onChange={handleCheckboxChange}/>;
      })}
    </Dropdown>
  );
};

FilterDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default FilterDropdown;