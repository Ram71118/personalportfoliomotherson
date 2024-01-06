/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TabDefaultWrapper = ({ className, divClassName, text = "Sobre", hasDiv = true }) => {
  return (
    <div className={`tab-default-wrapper ${className}`}>
      {hasDiv && <div className={`div ${divClassName}`}>{text}</div>}
    </div>
  );
};

TabDefaultWrapper.propTypes = {
  text: PropTypes.string,
  hasDiv: PropTypes.bool,
};
