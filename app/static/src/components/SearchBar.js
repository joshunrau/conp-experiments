import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ filters }) => {

  // idea - add search by variable (eg creators) 

  const [activeFilters, setActiveFilters] = useState(() => {
    const initialState = {}
    Object.entries(filters).forEach(([category, options]) => {
      initialState[category] = Object.fromEntries(options.map(option => [option, false]))
    })
    return initialState
  })

  const handleCheckboxChange = (category, option) => {
    setActiveFilters(state => {
      state[category][option] = !state[category][option]
      return {...state};
    })
  }

  return (
    <div>
      <div className="d-flex">
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#filters-collapse" aria-expanded="false" aria-controls="collapseExample">
          Show Filters
        </button>
        <form className="d-flex flex-fill" role="search">
          <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div className="collapse" id="filters-collapse">
        <div className="accordion py-2">
          {Object.entries(activeFilters).map(([category, options]) => {
            const idPrefix =  `${category.toLowerCase()}`
            const collapseId = `${idPrefix}-collapse`
            return (
              <div className="accordion-item" key={idPrefix}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + collapseId}>
                    { category }
                  </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse">
                  <div className="accordion-body">
                    {Object.entries(options).map(([filter, isActive]) => {
                      const checkboxId = `${idPrefix}-${filter}-checkbox`;
                      return (
                        <div key={checkboxId}>
                          <input
                            type="checkbox"
                            id={checkboxId}
                            name={checkboxId}
                            checked={isActive}
                            onChange={() => handleCheckboxChange(category, filter)}
                          />
                          <label htmlFor={checkboxId}>
                            { filter }
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  filters: PropTypes.object // tbd
}

SearchBar.defaultProps = {
  filters: {
    modality: ["fMRI"],
    software: ["linux", "windows"],
    purpose: ["cognitive", "sensory", "motor"]
  }
}

export default SearchBar;