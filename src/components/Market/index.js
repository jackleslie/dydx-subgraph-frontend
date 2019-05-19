import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Market({ market }) {
  return (
    <div className={styles.market}>
      <h2 className={styles.tokenSymbol}>{market.tokenSymbol}</h2>
      <h3 className={styles.infoTitle}>Last index update</h3>
      <p className={styles.infoText}>{market.lastIndexUpdate}</p>
      <h3 className={styles.infoTitle}>Accrued borrow interest</h3>
      <p className={styles.infoText}>{market.borrowIndex}</p>
      <h3 className={styles.infoTitle}>Accrued supply interest</h3>
      <p className={styles.infoText}>{market.supplyIndex}</p>
    </div>
  );
}

Market.propTypes = {
  market: PropTypes.object.isRequired
};
