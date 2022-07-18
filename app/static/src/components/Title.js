import PropTypes from "prop-types";
import React from "react";

const Title = ({ children }) => {
  return (
    <div className="d-flex flex-row justify-content-center w-100">
      <h2 className="">
        <span className="text-red">CONP Portal</span> | { children }
      </h2>
      <hr className="my-1"/>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;