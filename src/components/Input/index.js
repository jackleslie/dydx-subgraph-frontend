import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Input({ setInputAddress, ...props }) {
  return (
    <input
      type="text"
      id="address"
      name="address"
      required
      minLength="42"
      maxLength="42"
      placeholder="ETH address (0xab12...)"
      className={styles.input}
      onChange={event => setInputAddress(event.target.value)}
      {...props}
    />
  );
}

Input.propTypes = {
  setInputAddress: PropTypes.func.isRequired
};
