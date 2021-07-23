import React from "react";

import classes from "./FeatureNavigation.module.scss";

import Logo from "../Logo/Logo";

const FeatureNavigation = (props) => {
  return (
    <div className={classes.featureNavigationContainer}>
      <Logo />

      <div className={classes.title}>{props.title}</div>
      <div className={classes.navigationLinks}>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureNavigation;
