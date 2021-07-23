import React from "react";

import Navigation from "./Navigation.js";
import Header from "./Header.js";

import classes from "./HeaderSection.module.scss";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Navigation
          btnSignUpRef={props.btnSignUpRef}
          featureSectionRef={props.featureSectionRef}
          supportSectionRef={props.supportSectionRef}
        />
        <Header featureSectionRef={props.featureSectionRef}/>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
