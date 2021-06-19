import React from 'react'
import { IoArrowDownOutline } from "react-icons/io5";

import classes from './Header.module.scss'

const Header = () => {
    return (
       <div className={classes.header}>
          <p className={classes.heading1}>Introducing </p>
          <p className={classes.heading2}>the beast </p>
          <button className={classes.moreBtn}>
            <IoArrowDownOutline />
          </button>
        </div>
    )
}

export default Header
