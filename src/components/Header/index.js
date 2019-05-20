import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export default function Header({ title, subtitle }) {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </Link>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};
