import React from "react";

import classes from "./Footer.module.scss";

const FooterSection = () => {
  return (
    <div className={classes.footerContainer}>
      <p>
        &copy; Copyright by &nbsp;
        <a target="#" href="https://twitter.com/saketsingh1999">
          Saket Mahar
        </a>
        &nbsp; Use for learning or your portfolio. Don't use to teach. Don't
        claim as your own.
      </p>
    </div>
  );
};

export default FooterSection;
