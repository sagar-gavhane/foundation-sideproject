import React from "react";
import cn from "classnames";
import Button from "./../Button";
import styles from "./Header.module.css";
import logo1XLight from "./../../assets/logo-1x-light.png";
import menubar1XLight from "./../../assets/menubar-1x-light.png";

const Header = props => {
  return (
    <div className={styles.headerContainer}>
      <div className={cn(styles.headerItem, styles.headerItemOne)}>
        <img className={styles.logo} src={logo1XLight} alt="logo 1x light" />
      </div>
      <div className={cn(styles.headerItem, styles.headerItemTwo)}>
        <h1 className={styles.title}>Foundation</h1>
        <div className={styles.subTitle}>Startup landing template</div>
      </div>
      <div className={cn(styles.headerItem, styles.headerItemThree)}>
        <img
          className={cn(styles.menubarIcon)}
          src={menubar1XLight}
          alt="menubar 1x light"
        />
        <ul className={cn(styles.navbar)}>
          <li className={cn(styles.navItem)}>
            <a className={cn(styles.navLink)} href="#/">
              Home
            </a>
          </li>
          <li className={cn(styles.navItem)}>
            <a className={cn(styles.navLink)} href="#/">
              Stories
            </a>
          </li>
          <li className={cn(styles.navItem)}>
            <a className={cn(styles.navLink)} href="#/">
              Library
            </a>
          </li>
          <li className={cn(styles.navItem)}>
            <Button type="primary" size="small">
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
