import React, { useState } from "react";
import PropTypes from "prop-types";

import ExperimentCard from "./ExperimentCard";

import OptionsDropdown from "./OptionsDropdown";

import sortByKey from "../utils/sortObjects";

const sortOptions = Object.keys(ExperimentCard.propTypes);

const ExperimentTable = ({ experiments }) => {

  const [sortKey, setSortKey] = useState("title");

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [maxResultsPerPage, setMaxResultsPerPage] = useState(10);

  const numberResultsAvailable = experiments.length;

  const experimentsForCurrentPage = (() => {
    const startIndex = (currentPageNumber - 1) * maxResultsPerPage;
    const endIndex = startIndex + maxResultsPerPage;
    return experiments.slice(startIndex, endIndex);
  })();
  
  const numberResultsShown = experimentsForCurrentPage.length;
  const numberPagesAvailable = Math.ceil(numberResultsAvailable / maxResultsPerPage);

  const handlePageChange = (newPageNumber) => {
    if (newPageNumber === Infinity) {
      setCurrentPageNumber(numberPagesAvailable);
    } else if (newPageNumber >= 1 && newPageNumber <= numberPagesAvailable) {
      setCurrentPageNumber(newPageNumber);
    }
  };

  experimentsForCurrentPage.sort(sortByKey(sortKey));

  // define subcomponents for readability

  const header = (
    <div className="row">
      <div className="col">
        <span>Page: {currentPageNumber}/{numberPagesAvailable}; </span>
        <span>Results: {numberResultsShown}/{numberResultsAvailable}</span>
      </div>
      <div className="col d-flex justify-content-end">
        <OptionsDropdown label="Display" options={[5, 10, 15, 20]} onSelection={selection => setMaxResultsPerPage(selection)}/>
        <OptionsDropdown label="Sort By" options={sortOptions} onSelection={selection => setSortKey(selection)}/>
      </div>
    </div>
  );

  const body = (
    <div>
      {Object.entries(experimentsForCurrentPage).map(([id, props]) => {
        return <ExperimentCard key={id} {...props}/>;
      })}
    </div>
  );
  
  const footer = (
    <div className='d-flex justify-content-center p-1'>
      <div className="btn-group" role="group">
        <button className="btn btn-outline-dark" onClick={() => handlePageChange(1)}>{"<<"}</button>
        <button className="btn btn-outline-dark" onClick={() => handlePageChange(currentPageNumber - 1)}>{"<"}</button>
        <button className="btn btn-outline-dark">{currentPageNumber}</button>
        <button className="btn btn-outline-dark" onClick={() => handlePageChange(currentPageNumber + 1)}>{">"}</button>
        <button className="btn btn-outline-dark" onClick={() => handlePageChange(Infinity)}>{">>"}</button>
      </div>
    </div>
  );

  return (
    <div className="my-1 p-2 rounded shadow-sm">
      { header }
      { body }
      { footer }
    </div>
  );
};

ExperimentTable.propTypes = {
  experiments: PropTypes.arrayOf(PropTypes.exact(ExperimentCard.propTypes)).isRequired
};

export default ExperimentTable;