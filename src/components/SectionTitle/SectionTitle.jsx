/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SectionTitle = ({ className, text = "Projects" }) => {
  return (
    <div className={`section-title ${className}`}>
      <div className="text-3">{text}</div>
      <div className="rectangle-2" />
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};
