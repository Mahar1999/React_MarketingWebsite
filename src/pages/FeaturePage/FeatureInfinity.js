import React from "react";

import classes from "./FeatureInfinity.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../img/GamingMain.png";
import FeatureNavigation from "../../components/FeatureNavigation/FeatureNavigation";
import GeneralFeatures from "./FeatureDetails/GeneralFeatures";
import { Carousel } from "react-responsive-carousel";

const FeaturePhoneix = () => {
  return (
    <div className={classes.FeaturePhoneixContainer}>
      <FeatureNavigation title={"Alpha Rogue Frost Fire"} />

      <Carousel infiniteLoop="true" interval="true">
        <div>
          <img src={img1} alt="photo1" />
          <p className="legend">View 1</p>
        </div>
        <div>
          <img src={img1} alt="photo2" />
          <p className="legend">View 2</p>
        </div>
        <div>
          <img src={img1} alt="photo3" />
          <p className="legend">View 3</p>
        </div>
      </Carousel>
      <div className={classes.featureDetails}>
        <div className={classes.generalFeatures}>
          <GeneralFeatures />
        </div>
      </div>
    </div>
  );
};

export default FeaturePhoneix;
