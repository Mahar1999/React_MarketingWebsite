import React from "react";
import { IoBarbellOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.cardContainerBorder}>
      <div className={classes.cardContainer}>
        <div className={classes.cardIconConatiner}>
          <IoBarbellOutline className={classes.cardIcon} />
        </div>
        <div className={classes.cardContentContainer}>
          <p className={classes.cardContentContainer__heading}>{props.title}</p>
          <p className={classes.cardContentContainer__para}>
            {props.description}
          </p>
        </div>
        <Link className={classes.specBtn} to={`/${props.pathTo}`}>
          Full Specification
        </Link>
      </div>
    </div>
  );
};

export default Card;
