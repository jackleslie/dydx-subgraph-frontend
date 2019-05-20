import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

import getDate from "../../helpers/getDate";

export default function Market({ market }) {
  const time = getDate(market.lastIndexUpdate);
  return (
    <div className={styles.market}>
      <h2 className={styles.tokenSymbol}>{market.tokenSymbol}</h2>
      <h3 className={styles.infoTitle}>Last index update</h3>
      <p className={styles.infoText}>{time}</p>
      <h3 className={styles.infoTitle}>Accrued borrow interest</h3>
      <p className={styles.infoText}>{`${(
        (market.borrowIndex / 1000000000000000000 - 1) *
        100
      ).toFixed(2)}%`}</p>
      <h3 className={styles.infoTitle}>Accrued supply interest</h3>
      <p className={styles.infoText}>{`${(
        (market.supplyIndex / 1000000000000000000 - 1) *
        100
      ).toFixed(2)}%`}</p>
    </div>
  );
}

Market.propTypes = {
  market: PropTypes.object.isRequired
};
