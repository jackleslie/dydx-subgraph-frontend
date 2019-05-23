import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Button({ children, small, ...props }) {
  return (
    <button className={small ? styles.smallButton : styles.button} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool
};

Button.defaultProps = {
  small: false
};
