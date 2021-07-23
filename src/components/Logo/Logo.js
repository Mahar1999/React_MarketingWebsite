import React from "react";

import classes from "./Logo.module.scss";

import logo from "../../img/logo2.jpg";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="logoPhoto" />
    </div>
  );
};

export default Logo;
