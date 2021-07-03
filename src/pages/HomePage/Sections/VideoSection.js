import React from "react";

import bckVideoMp4 from "../../../img/Video-4.mp4";
// import bckVideoWebm from "../../img/Video-1.webm";

import classes from "./VideoSection.module.scss";

const LaptopSection = () => {
  return (
    <div className={classes.videoContainer}>
      <div className={classes.gradient}>
        <p className={classes.headingPrimary}>
          We are what we behold <br /> and we behold what we are
        </p>
        <p className={classes.headingSecondary}>
          experience the power through you fingertips
        </p>
      </div>
      <video autoPlay muted loop className={classes.bckvideo}>
        <source src={bckVideoMp4} type="video/mp4" />
      </video>
    </div>
  );
};

export default LaptopSection;
