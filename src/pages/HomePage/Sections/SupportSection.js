import React from "react";

import classes from "./SupportSection.module.scss";

const ContactSection = (props) => {
  return (
    <div className={classes.contactContainer} ref={props.supportSectionRef}>
      <div className={classes.contactInfo}>
        <div className={classes.contactHeadingContainer}>
          <p className={classes.contactHeadingPrimary}>Contact Support ! </p>
          <p className={classes.contactHeadingTagline}>
            For more queries contact anyone of us anytime !
          </p>
        </div>

        <div className={classes.ContactUserContainer}>
          <ul>
            <li className={classes.heading}>
              <p className={classes.heading__primary}>Email (official) :</p>
              <p className={classes.heading__secondary}>
                saketsinghpublic@gmail.com
              </p>
            </li>
            <li className={classes.heading}>
              <p className={classes.heading__primary}>Contact No. :</p>
              <p className={classes.heading__secondary}>7397355574</p>
            </li>
            <li className={classes.heading}>
              <p className={classes.heading__primary}>Email (personal) :</p>
              <p className={classes.heading__secondary}>
                saketsingh1999@gmail.com
              </p>
            </li>
            <li className={classes.heading}>
              <p className={classes.heading__primary}>Address :</p>
              <p className={classes.heading__secondary}>
                Bhaktinagar - 112/1 , Bhavnagar , Gujarat , 354002
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.contactImage}></div>
    </div>
  );
};

export default ContactSection;
