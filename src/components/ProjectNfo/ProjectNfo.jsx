/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProjectNfo = ({
  text = "Yoga Page",
  text1 = "I build yoga page in this website you know about types of yoga asanas and their benifits in our life.",
  frameClassName,
  href = "https://ram71118yoga.ccbp.tech",
}) => {
  return (
    <div className="project-nfo">
      <div className={`frame ${frameClassName}`}>
        <div className="text-4">{text}</div>
        <p className="p">{text1}</p>
        <a className="bot-o-secud-rio" href={href} rel="noopener noreferrer" target="_blank">
          <div className="text-5">View Project</div>
        </a>
      </div>
    </div>
  );
};

ProjectNfo.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  href: PropTypes.string,
};
