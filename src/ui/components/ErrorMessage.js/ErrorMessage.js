import React from "react";

import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <div className={styles.error}>{error}</div>;
};

export default ErrorMessage;
