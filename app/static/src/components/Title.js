import PropTypes from "prop-types";
import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h2>
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