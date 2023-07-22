import React from "react";
import "./Navigation.css"

const Logo = ({ collapsed }) => {
  return (
    <img
      src={collapsed ? "./images/logo-sm.png" : "./images/logo.png"}
      alt="Emilus"
      className={collapsed ? "collapsed e-ico" : "not-collapsed"}
    />
  );
};

export default Logo;
