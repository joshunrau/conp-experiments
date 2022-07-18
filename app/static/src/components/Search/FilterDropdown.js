import React from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown";
import FilterCheckbox from "./FilterCheckbox";

const FilterDropdown = ({ label, options, onChange }) => {
  return (
    <Dropdown label={label}>
      {Object.entries(options).map(([key, value]) => {
        const handleCheckboxChange = () => onChange(key);
        return <FilterCheckbox key={key} label={key} checked={value} onChange={handleCheckboxChange}/>;
      })}
    </Dropdown>
  );
};

FilterDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterDropdown;