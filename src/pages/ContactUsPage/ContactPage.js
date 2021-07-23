import React from "react";

import FeatureNavigation from "../../components/FeatureNavigation/FeatureNavigation";
import Footer from "../../components/Footer/FooterSection";

import classes from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={classes.contactConatiner}>
      <FeatureNavigation title={"Contact Us"} />

      <div className={classes.formContainer}>
        {/* First Name */}
        <div className={classes.labelContainer}>
          <label htmlFor="Fname">First Name :</label>
          <input type="text" name="Fname" placeholder="First Name" />
        </div>
        {/* Last Name */}
        <div className={classes.labelContainer}>
          <label htmlFor="Lname">Last Name :</label>
          <input type="text" name="Lname" placeholder="Last Name" />
        </div>
        {/* Contact email */}
        <div className={classes.labelContainer}>
          <label htmlFor="email">E-mail :</label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        {/* Query Message */}
        <div className={classes.labelContainer}>
          <label htmlFor="text">Message :</label>
          <textarea name="text" id="QueryMessage" rows="8"></textarea>
        </div>
        <button className={classes.formBtn}>Submit</button>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
