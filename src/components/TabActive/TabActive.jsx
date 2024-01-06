/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TabActive = ({ className, text = "Sobre" }) => {
  return (
    <div className={`tab-active ${className}`}>
      <div className="text-wrapper">{text}</div>
      <div className="rectangle" />
    </div>
  );
};

TabActive.propTypes = {
  text: PropTypes.string,
};
