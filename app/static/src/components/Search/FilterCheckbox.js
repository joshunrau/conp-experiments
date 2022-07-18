import React from "react";
import PropTypes from "prop-types";

const FilterCheckbox = ({ label, checked, onChange }) => {
  const id = label.replace(/\s/g, "-").toLowerCase();
  return (
    <div>
      <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
      <label htmlFor={id}>{ label }</label><br></br>
    </div>
  );
};

FilterCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterCheckbox;