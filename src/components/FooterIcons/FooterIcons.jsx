/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BiEnvelopeFill4 } from "../../icons/BiEnvelopeFill4";
import { BiLinkedin5 } from "../../icons/BiLinkedin5";
import { PhInstagramLogoFill5 } from "../../icons/PhInstagramLogoFill5";
import "./style.css";

export const FooterIcons = ({ className }) => {
  return (
    <div className={`footer-icons ${className}`}>
      <div className="icons">
        <PhInstagramLogoFill5 className="icon-instance-node" />
        <BiLinkedin5 className="icon-instance-node" />
        <BiEnvelopeFill4 className="icon-instance-node" />
      </div>
      <div className="text-wrapper-3">Madelyn Torff 2021</div>
    </div>
  );
};
