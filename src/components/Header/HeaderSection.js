import React from "react";

import Navigation from "./Navigation.js";
import Header from "./Header.js";

import classes from "./HeaderSection.module.scss";

const MainHeader = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Navigation />
        <Header />
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
