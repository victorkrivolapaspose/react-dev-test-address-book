import React from "react";

import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ isLoading = false }) => {
  if (!isLoading) return null;
  return (
    <div className={styles["loading-spinner"]}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
