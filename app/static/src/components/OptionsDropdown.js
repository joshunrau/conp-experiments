import React from "react";
import PropTypes from "prop-types";

const OptionsDropdown = ({ label, options, onSelection }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        { label }
      </button>
      <ul className="dropdown-menu">
        {options.map(option => {
          return (
            <li key={option}>
              <button className="dropdown-item" type="button" onClick={() => onSelection(option)}>
                { option }
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

OptionsDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default OptionsDropdown;