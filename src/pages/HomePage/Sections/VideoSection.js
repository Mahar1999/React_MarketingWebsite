import React from "react";

import bckVideoMp4 from "../../../img/Video-4.mp4";

import classes from "./VideoSection.module.scss";

const LaptopSection = (props) => {
  return (
    <div className={classes.videoContainer} ref={props.btnSignUpRef}>
      <div className={classes.gradient}>
        <p className={classes.headingPrimary}>
          We are what we behold <br /> and we behold what we are
        </p>
        <p className={classes.headingSecondary}>
          experience the power through you fingertips
        </p>
        <button className={classes.signUp} >
          Sign up
        </button>
      </div>
      <video autoPlay muted loop className={classes.bckvideo}>
        <source src={bckVideoMp4} type="video/mp4" />
      </video>
    </div>
  );
};

export default LaptopSection;
