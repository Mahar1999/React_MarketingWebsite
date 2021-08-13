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
              {generalKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
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
              {processorKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
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
              {operatingKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
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
              {displayAudioKeys.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={classes.box__right}>
            <ul>
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
