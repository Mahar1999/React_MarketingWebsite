import React from "react";

import portImg from "../../../img/port-1.png";

import classes from "./PortSection.module.scss";

const PortSection = () => {
  return (
    <div className={classes.portContainer}>
      <div className={classes.heading}>
        <h1 className={classes.heading__primary}>- Packed With Ports - </h1>
        <p className={classes.heading__secondary}>
          Have all the ports you need, including up to an USB 3.2 Gen 2 Type-C™
          with Thunderbolt™ 3, and go beyond other mere gaming laptops
        </p>
      </div>

      <div className={classes.contetnContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.list}>
            <p className={classes.listHeading}>- PLAY UNPLUGGED, OR NOT -</p>
            <ul>
              <li>
                1 Thunderbolt™ 3 (40 Gbps signaling rate) with SuperSpeed USB
                Type-C® 10 Gbps signaling rate (DisplayPort™ 1.4, HP Sleep and
                Charge)6, 7, 8
              </li>
              <li>
                1 SuperSpeed USB Type-A 5 Gbps signaling rate (HP Sleep and
                Charge)
              </li>
              <li>2 SuperSpeed USB Type-A 5 Gbps signaling rate</li>
              <li>1 RJ-45</li>
              <li>1 AC Smart pin</li>
              <li>1 Headphone/microphone combo (DTS: X® Ultra)9</li>
              <li>1 Mini DisplayPort™</li>
              <li>1 HDMI 2.0a</li>
            </ul>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <img src={portImg} alt="portImg" />
        </div>
      </div>
    </div>
  );
};

export default PortSection;
