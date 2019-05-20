import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

import getDate from "../../helpers/getDate";

export default function Short({ short }) {
  return (
    <div className={styles.short}>
      <h3 className={styles.infoTitle}>Timestamp</h3>
      <p className={styles.infoText}>{getDate(short.timestamp)}</p>
      {/*
      <h3 className={styles.infoTitle}>Amount</h3>
      <p className={styles.infoText}>
        {`${(short.amount / 1000000000000000000).toFixed(2)} ETH`}
      </p>
      <h3 className={styles.infoTitle}>Margin deposit</h3>
      <p className={styles.infoText}>
        {`${(short.marginDeposit / 1000000000000000000).toFixed(2)} ETH`}
      </p>
      */}
      <h3 className={styles.infoTitle}>Leverage</h3>
      <p className={styles.infoText}>
        {`${Number(short.leverage).toFixed(2)}x`}
      </p>
      <h3 className={styles.infoTitle}>Expires</h3>
      <p className={styles.infoText}>{getDate(short.expires)}</p>
      <h3 className={styles.infoTitle}>Open price</h3>
      <p className={styles.infoText}>{`${Number(short.openPrice).toFixed(
        4
      )} ETH`}</p>
      <h3 className={styles.infoTitle}>Market</h3>
      <p className={styles.infoText}>{short.market}</p>
    </div>
  );
}

Short.propTypes = {
  short: PropTypes.object.isRequired
};
