import React from "react";

import styles from "./index.module.css";

export default function Input({ ...props }) {
  return (
    <input
      type="text"
      id="address"
      name="address"
      required
      minlength="42"
      maxlength="42"
      placeholder="ETH address (0xab12...)"
      className={styles.input}
      {...props}
    />
  );
}
