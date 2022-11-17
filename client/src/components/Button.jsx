import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ type, variant = 'primary', children, ...props }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={getClasses([
      styles.button,
      styles[`button--${buttonTypes[variant]}`],
    ])}
    {...props}
  >
    {children}
  </button>
);

const SelectButton = ({ children, id, ...props }) => (
  <select
    id={id}
    className={getClasses([styles.button, styles.button__select])}
    {...props}
  >
    {children}
  </select>
);

export { SelectButton };
export default Button;
