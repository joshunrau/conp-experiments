import React, { useState } from "react";
import PropTypes from "prop-types";

import ExperimentFormPopup from "./ExperimentFormPopup";
import ExperimentFormToggle from "./ExperimentFormToggle";

import submitExperiment from "../../api/submitExperiment";

const ExperimentForm = () => {

  const handleSubmit = (state) => {
    submitExperiment(state);
  };

  return (
    <div className="p-2">
      <ExperimentFormToggle target="#exampleModal" />
      <ExperimentFormPopup id="exampleModal" onSubmit={handleSubmit}/>
    </div>
  );
};

ExperimentForm.propTypes = {};

export default ExperimentForm;