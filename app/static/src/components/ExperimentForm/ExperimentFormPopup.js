import React, { useState } from "react";
import PropTypes from "prop-types";

const ExperimentFormPopup = ({ id, onSubmit }) => {

  const [state, setState] = useState({
    title: null,
    creators: null
  });

  const handleChange = (event, property) => {
    setState(state => {
      state[property] = event.target.value;
      return {...state};
    });
  };


  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1">
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
              <input type="title" className="form-control" id="title-input" value={state.title || ""} onChange={(event) => handleChange(event, "title")}/>
            </div>
            <div className="mb-3">
              <label htmlFor="creators-input" className="form-label">Creators</label>
              <input type="creators" className="form-control" id="creators-input" value={state.creators || ""} onChange={(event) => handleChange(event, "creators")}/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperimentFormPopup.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ExperimentFormPopup;