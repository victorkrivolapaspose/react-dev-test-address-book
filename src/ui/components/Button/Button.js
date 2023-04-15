import React from "react";
import cx from "classnames";

import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", isPrimary = true }) => {
  let btnClassNames = `${styles.button} ${
    isPrimary ? styles.primary : styles.secondary
  }`;
  return (
    <button
      // TODO: Add conditional classNames
      // - Must have a condition to set the '.primary' className
      // - Must have a condition to set the '.secondary' className
      className={btnClassNames}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
