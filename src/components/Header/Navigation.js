import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  const scrollToSignUp = (e) => {
    let signUpCoords = props.btnSignUpRef.current;

    // console.log(signUpCoords.getBoundingClientRect());
    // console.log(e.target.getBoundingClientRect());

    window.scrollTo({
      left: signUpCoords.getBoundingClientRect().left + window.pageXOffset,
      top: signUpCoords.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  const scrollToFeatureSection = (e) => {
    let featureCoords = props.featureSectionRef.current;
    console.log(featureCoords);

    window.scrollTo({
      left: featureCoords.getBoundingClientRect().left + window.pageXOffset,
      top: featureCoords.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  const scroolToSupportSection = (e) => {
    let supportCoords = props.supportSectionRef.current;

    window.scrollTo({
      left: supportCoords.getBoundingClientRect().left + window.pageXOffset,
      top: supportCoords.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.navigation}>
      <nav>
        <ul>
          <li onClick={scrollToFeatureSection}> New Arrival</li>
          <li onClick={scroolToSupportSection}>Support</li>
        </ul>
      </nav>
      <Logo />
      <nav>
        <ul>
          <li className={classes.LinkContactUs}>
            <Link to="/contactUs" >
              Contact Us
            </Link>
          </li>
          <li onClick={scrollToSignUp}>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
