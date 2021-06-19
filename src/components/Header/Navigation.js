import React from 'react'

import logo from '../../img/logo2.jpg'

import classes from './Navigation.module.scss'

const Navigation = () => {
    return (
            <div className={classes.navigation}>
          <nav>
            <ul>
              <li>about us</li>
              <li>about us</li>
            </ul>
          </nav>
          <div className={classes.logo}>
            <img src={logo} alt="logoPhoto" />
          </div>
          <nav>
            <ul>
              <li>about us</li>
              <li>about us</li>
            </ul>
          </nav>
        </div>
    )
}

export default Navigation
