import React from "react";

import classes from "./PopupSignup.module.scss";

const popupSignup = () => {
  return (
    <div className={classes.popupContainer}>
      <div className={classes.backdrop}></div>
      <div className={classes.signupContainer}>
        <p>Sign Up our weekly newsletter!</p>
      </div>
    </div>
  );
};

export default popupSignup;
