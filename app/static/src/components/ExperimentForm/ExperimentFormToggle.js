import React from "react";
import PropTypes from "prop-types";

const ExperimentFormToggle = ({ target }) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={target}>
        <span className="text-uppercase">Submit Experiment</span>
      </button>
    </div>
  );
};

ExperimentFormToggle.propTypes = {
  target: PropTypes.string.isRequired
};

export default ExperimentFormToggle;