import React from "react";

import logo from "../../img/logo2.jpg";
// import FeatureSection from "../Sections/GamingSection";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  const smoothScrollFeatureSection = () => {};
  return (
    <div className={classes.navigation}>
      <nav>
        <ul>
          <li onClick={smoothScrollFeatureSection}>New Arrival</li>
          <li>Support</li>
        </ul>
      </nav>
      <div className={classes.logo}>
        <img src={logo} alt="logoPhoto" />
      </div>
      <nav>
        <ul>
          <li>Contact Us</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
