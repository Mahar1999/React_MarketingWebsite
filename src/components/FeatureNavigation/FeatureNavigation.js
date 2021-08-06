import React from "react";
import { Link } from "react-router-dom";

import classes from "./FeatureNavigation.module.scss";

import Logo from "../Logo/Logo";

const FeatureNavigation = (props) => {
  return (
    <div className={classes.featureNavigationContainer}>
      <Logo />

      <div className={classes.title}>{props.title}</div>
      <div className={classes.navigationLinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureNavigation;
