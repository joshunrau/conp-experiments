import React from "react";
import PropTypes from "prop-types";

const ExperimentCardProperty = ({ label, value }) => {
  return (
    <div>
      <span className="fw-bold">{label}: </span>
      <span>{value}</span>
    </div>
  );
};

ExperimentCardProperty.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default ExperimentCardProperty;