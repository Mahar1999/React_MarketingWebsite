import React from "react";
import { IoArrowDownOutline } from "react-icons/io5";

import classes from "./Header.module.scss";

const Header = (props) => {
  const scrollToFeatureSection = (e) => {
    let featureCoords = props.featureSectionRef.current;
    console.log(featureCoords);

    window.scrollTo({
      left: featureCoords.getBoundingClientRect().left + window.pageXOffset,
      top: featureCoords.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.header}>
      <p className={classes.heading1}>Introducing </p>
      <p className={classes.heading2}>the beast </p>
      <button className={classes.moreBtn}>
        <IoArrowDownOutline onClick={scrollToFeatureSection} />
      </button>
    </div>
  );
};

export default Header;
