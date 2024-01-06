/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BiEnvelopeFill } from "../BiEnvelopeFill";
import { BiLinkedin } from "../BiLinkedin";
import { PhInstagramLogo } from "../PhInstagramLogo";
import "./style.css";

export const FooterIconsWrapper = ({ className }) => {
  return (
    <div className={`footer-icons-wrapper ${className}`}>
      <div className="icons-2">
        <PhInstagramLogo />
        <BiLinkedin />
        <BiEnvelopeFill />
      </div>
      <div className="text-wrapper-4">Madelyn Torff 2021</div>
    </div>
  );
};
