import React from 'react'
import cn from 'classnames';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={cn(styles.btn, { [styles.btnPrimary]: props.type === 'primary' }, styles.btnBlock)}>
      {props.children}
    </button>
  );
}

export default Button;
