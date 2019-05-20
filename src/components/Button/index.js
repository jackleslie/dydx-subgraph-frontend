import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Button({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};
