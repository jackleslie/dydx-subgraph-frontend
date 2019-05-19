import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Layout({ children, ...props }) {
  return (
    <div className={styles.layout} {...props}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
