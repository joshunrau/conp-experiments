import React from "react";
import PropTypes from "prop-types";

import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExperimentCardProperty from "./ExperimentCardProperty";

const ExperimentCard = ({
  title,
  creators,
  version,
  dateAdded,
  dateUpdated,
  numberFiles,
  sizeFiles,
  downloads,
  views
}) => {
  return (
    <div className="card">
      <div className="row p-2">
        <div className="col-md-auto d-flex align-items-center">
          <img className="img-fluid rounded-start" src="https://via.placeholder.com/150" alt=""/>
        </div>
        <div className="col-md d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <ExperimentCardProperty label="Creators" value={creators} />
          <ExperimentCardProperty label="Version" value={version} />
          <ExperimentCardProperty label="Date Added" value={dateAdded} />
          <ExperimentCardProperty label="Date Updated" value={dateUpdated} />
          <ExperimentCardProperty label="Number of Files" value={numberFiles} />
          <ExperimentCardProperty label="Size" value={sizeFiles} />
        </div>
        <div className="col-md-auto d-flex flex-column justify-content-around">
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faDownload} size="xl"/>
            <span>{downloads}</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faEye} size="xl"/>
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperimentCard.propTypes = {
  title: PropTypes.string.isRequired,
  creators: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
  dateAdded: PropTypes.string.isRequired,
  dateUpdated: PropTypes.string.isRequired,
  numberFiles: PropTypes.number.isRequired,
  sizeFiles: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default ExperimentCard;