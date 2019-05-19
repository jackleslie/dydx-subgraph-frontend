import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Header({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};
