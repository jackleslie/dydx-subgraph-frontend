import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

function getDate(lastIndexUpdate) {
  const a = new Date(lastIndexUpdate * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

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
