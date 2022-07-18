import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ label, children }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        { label }
      </button>
      <div className="dropdown-menu">
        { children }
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Dropdown;