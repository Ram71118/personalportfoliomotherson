/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TabDefaultWrapper } from "../TabDefaultWrapper";
import "./style.css";

export const Header = ({
  className,
  divClassName,
  text = "Madelyn Torff",
  navClassName,
  override = (
    <TabDefaultWrapper className="tab-default-instance" divClassName="design-component-instance-node" text="About" />
  ),
  tabDefaultWrapperText = "Projects",
  tabDefaultWrapperHasDiv,
}) => {
  return (
    <div className={`header ${className}`}>
      <div className={`madelyn-torff ${divClassName}`}>{text}</div>
      <div className={`nav ${navClassName}`}>
        {override}
        <TabDefaultWrapper
          className="tab-default-instance"
          divClassName="design-component-instance-node"
          text={tabDefaultWrapperText}
        />
        <TabDefaultWrapper
          className="tab-default-instance"
          divClassName="design-component-instance-node"
          hasDiv={tabDefaultWrapperHasDiv}
          text="Contacts"
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  tabDefaultWrapperText: PropTypes.string,
  tabDefaultWrapperHasDiv: PropTypes.bool,
};
