import React from "react";

import Feature from "../../../img/GamingMain_1.png";

import classes from "./GamingSection.module.scss";
const FeatureSection1 = () => {
  return (
    <div className={classes.container}>
      {/* Left box Container */}
      <div className={classes.leftBox}>
        <div className={classes.LeftContentPlacementLeft}>
          <div className={classes.box}>
            <p className={classes.leftBox__heading}>
              Rouge <br />
              Tempest
              <br /> Cooling
            </p>
            <p className={classes.leftBox__para}>
              Maximize performance
              <br /> and keep your gaming <br />
              system cool under pressure
            </p>
          </div>
        </div>
        <div className={classes.LeftContentPlacementRight}></div>
      </div>
      <div className={classes.photo}>
        <img src={Feature} alt="featuredPhoto1" />
      </div>

      {/* Right Box Container */}
      <div className={classes.rightBox}>
        <div className={classes.RightContentPlacementLeft}></div>
        <div className={classes.RightContentPlacementRight}>
          <div className={classes.box}>
            <p className={classes.rightBox__heading}>
              Upgrade
              <br /> Expand
              <br />
              Evolve
            </p>
            <p className={classes.rightBox__para}>
              Easily upgrade and maintain
              <br /> with single panel access
              <br /> to HDD, SDD, and RAM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection1;
