import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

import getDate from "../../helpers/getDate";

export default function Long({ long }) {
  return (
    <div className={styles.long}>
      <h3 className={styles.infoTitle}>Timestamp</h3>
      <p className={styles.infoText}>{getDate(long.timestamp)}</p>
      <h3 className={styles.infoTitle}>Amount</h3>
      <p className={styles.infoText}>
        {`${(long.amount / 1000000000000000000).toFixed(2)} ETH`}
      </p>
      <h3 className={styles.infoTitle}>Margin deposit</h3>
      <p className={styles.infoText}>
        {`${(long.marginDeposit / 1000000000000000000).toFixed(2)} ETH`}
      </p>
      <h3 className={styles.infoTitle}>Leverage</h3>
      <p className={styles.infoText}>
        {`${Number(long.leverage).toFixed(2)}x`}
      </p>
      <h3 className={styles.infoTitle}>Margin deposit</h3>
      <p className={styles.infoText}>{getDate(long.expires)}</p>
      <h3 className={styles.infoTitle}>Open price</h3>
      <p className={styles.infoText}>{`${Number(long.openPrice).toFixed(
        4
      )} ETH`}</p>
      <h3 className={styles.infoTitle}>Market</h3>
      <p className={styles.infoText}>{long.market}</p>
    </div>
  );
}

Long.propTypes = {
  long: PropTypes.object.isRequired
};
