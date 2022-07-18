import React from "react";
import PropTypes from "prop-types";

import DropdownButton from "react-bootstrap/DropdownButton";
import FilterCheckbox from "./FilterCheckbox";

const FilterDropdown = ({ title, options, onChange }) => {
  return (
    <DropdownButton title={title}>
      {Object.entries(options).map(([key, value]) => {
        const handleCheckboxChange = () => onChange(key);
        return <FilterCheckbox key={key} label={key} checked={value} onChange={handleCheckboxChange}/>;
      })}
    </DropdownButton>
  );
};

FilterDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterDropdown;