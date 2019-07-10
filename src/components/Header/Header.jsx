import React from 'react'
import cn from 'classnames';
import styles from './Header.module.css';
import logo1XLight from './../../assets/logo-1x-light.png'
import menubar1XLight from './../../assets/menubar-1x-light.png'

const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <div className={cn(styles.headerItem, styles.headerItemOne)}>
        <img className={styles.logo} src={logo1XLight} alt="logo 1x light" />
      </div>
      <div className={cn(styles.headerItem, styles.headerItemTwo)}>
        <h1 className={styles.title}>Foundation</h1>
      </div>
      <div className={cn(styles.headerItem, styles.headerItemThree)}>
        <img src={menubar1XLight} alt="menubar 1x light" />
      </div>
    </div>
  );
}

export default Header;
