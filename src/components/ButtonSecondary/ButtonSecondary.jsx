/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonSecondary = ({ className, href }) => {
  return (
    <a className={`button-secondary ${className}`} href={href} rel="noopener noreferrer" target="_blank">
      <div className="text-2">LinkedIn</div>
    </a>
  );
};

ButtonSecondary.propTypes = {
  href: PropTypes.string,
};
