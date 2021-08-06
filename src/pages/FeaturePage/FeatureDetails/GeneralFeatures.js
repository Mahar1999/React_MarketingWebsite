import React from "react";

import classes from "./GeneralFeatures.module.scss";

const GeneralFeatures = ({
  generalDetail,
  processorDetail,
  operatingDetail,
  displayAudioDetail,
  additionalDetail,
}) => {
  const generalValues = Object.values(generalDetail);
  const generalKeys = Object.keys(generalDetail);

  const processorValues = Object.values(processorDetail);
  const processorKeys = Object.keys(processorDetail);

  const operatingValues = Object.values(operatingDetail);
  const operatingKeys = Object.keys(operatingDetail);

  const displayAudioValues = Object.values(displayAudioDetail);
  const displayAudioKeys = Object.keys(displayAudioDetail);

  const additionalValues = Object.values(additionalDetail);
  const additionalKeys = Object.keys(additionalDetail);

  return (
    <React.Fragment>
      <div className={classes.GeneralFeaturesContainer}>
        <h1 className={classes.FeatureHeading}>General Features</h1>
        <div className={classes.box}>
          <div className={classes.box__left}>
            <ul>
              {/* <li>Sales Package</li>
              <li>Model Number</li>
              <li>Part Number</li>
              <li>Model Name</li>
              <li>Series</li>
              <li>Color</li>
              <li>Type</li>
              <li>Suitable For</li>
              <li>Power Supply</li>
              <li>Battery Cell</li>
              <li> MS Office Provided</li> */}
              {generalKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
              {/* <li>Laptop, battery, power adapter, user guide</li>
              <li>GF63 Thin 10SCXR-1616IN</li>
              <li>9S7-16R412-1616</li>
              <li>GF63 Thin 10SCXR-1616IN</li>
              <li>GF63 Thin</li>
              <li>Black</li>
              <li>Gaming Laptop</li>
              <li>Processing & Multitasking</li>
              <li>120W Adapter</li>
              <li>3</li>
              <li>No</li> */}
              {generalValues.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div className={classes.GeneralFeaturesContainer}>
        <h1 className={classes.FeatureHeading}>
          Processor And Memory Features
        </h1>
        <div className={classes.box}>
          <div className={classes.box__left}>
            <ul>
              {/* <li>Dedicated Graphic Memory Type</li>
              <li>Dedicated Graphic Memory Capacity</li>
              <li>Processor Brand</li>
              <li>Processor Name</li>
              <li>Processor Generation</li>
              <li>SSD</li>
              <li>SSD Capacity</li>
              <li>RAM</li>
              <li>RAM Type</li>
              <li>HDD Capacity</li>
              <li>Processor Variant</li>
              <li>Clock Speed</li>
              <li>Cache</li>
              <li>Graphic Processor</li>
              <li>Number of Cores</li> */}
              {processorKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
              {/* <li>GDDR6</li>
              <li>4 GB</li>
              <li>Intel</li>
              <li>Hexa Core i5</li>
              <li>10th Gen</li>
              <li>Yes</li>
              <li>256 GB</li>
              <li>8 GB</li>
              <li>DDR4</li>
              <li>1 TB</li>
              <li>10500H</li>
              <li>2.5 GHz with Turbo Boost upto 4.5 GHz</li>
              <li>12</li>
              <li>NVIDIA GeForce GTX 1650 Max Q</li>
              <li>6</li> */}
              {processorValues.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div className={classes.GeneralFeaturesContainer}>
        <h1 className={classes.FeatureHeading}>Operating System</h1>
        <div className={classes.box}>
          <div className={classes.box__left}>
            <ul>
              {/* <li>OS Architecture</li>
              <li>Operating System</li>
              <li>System Architecture</li> */}
              {operatingKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
              {/* <li>64 bit</li>
              <li>Windows 10 Home</li>
              <li>64</li> */}
              {operatingValues.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div className={classes.GeneralFeaturesContainer}>
        <h1 className={classes.FeatureHeading}>Display And Audio Features</h1>
        <div className={classes.box}>
          <div className={classes.box__left}>
            <ul>
              {/* <li>Touchscreen</li>
              <li>Screen Size</li>
              <li>Screen Resolution</li>
              <li>Screen Type</li>
              <li>Speakers</li>
              <li>Internal Mic</li>
              <li>Sound Chip</li>
              <li>Sound Properties</li>
              <li>Refresh Rate</li> */}
              {displayAudioKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
              {/* <li>No</li>
              <li>39.62 cm (15.6 inch)</li>
              <li>1920 x 1080 Pixel</li>
              <li>Full HD LED Backlit IPS Display</li>
              <li>Built in Dual Speakers</li>
              <li>Built-in Microphones</li>
              <li>Realtek ALC 269</li>
              <li>2x 2W Stereo Speakers</li>
              <li>60 Hz</li> */}
              {displayAudioValues.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div className={classes.GeneralFeaturesContainer}>
        <h1 className={classes.FeatureHeading}>Additional Features</h1>
        <div className={classes.box}>
          <div className={classes.box__left}>
            <ul>
              {/* <li>Disk Drive</li>
              <li>Web Camera</li>
              <li>Keyboard</li>
              <li>Backlight Keyboard</li>
              <li>Pointer Device</li>
              <li>Included Software</li>
              <li>Additional Features</li> */}
              {additionalKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
              {/* <li>Not Available</li>
              <li>720p HD Webcam (30fps@720p)</li>
              <li>Single Backlit Keyboard (Red)</li>
              <li>Yes</li>
              <li>Touchpad</li>
              <li>Silver-Lining Print,</li>
              <li>3-Cell, 51 Whr Battery</li> */}
              {additionalValues.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GeneralFeatures;
