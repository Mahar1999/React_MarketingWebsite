import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.scss";

import logo from "../../img/logo2.jpg";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link to="/">
        <img src={logo} alt="logoPhoto" />
      </Link>
    </div>
  );
};

export default Logo;
