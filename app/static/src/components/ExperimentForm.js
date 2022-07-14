import React, { useState } from "react";
import PropTypes from "prop-types";

import submitExperiment from "../api/submitExperiment";

const ExperimentForm = () => {

  const [title, setTitle] = useState("Example");

  const handleSubmit = () => {
    console.log(title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="experiment-form">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Submit Experiment
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Experiment Form
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title-input" className="form-label">Title</label>
                <input type="title" className="form-control" id="title-input" value={title} onChange={handleChange}/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitExperiment}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperimentForm.propTypes = {};

export default ExperimentForm;