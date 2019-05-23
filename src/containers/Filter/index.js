import React, { useState } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import { Button } from "../../components";

import styles from "./index.module.css";

export default function Filter({ match, location, ...props }) {
  const { showOpen, showClosed, showLiquidated } = queryString.parse(
    location.search
  );
  const [open, setOpen] = useState(showOpen === "true");
  const [closed, setClosed] = useState(showClosed === "true");
  const [liquidated, setLiquidated] = useState(showLiquidated === "true");
  const filterUrl = `${
    match.url
  }?showOpen=${open}&showClosed=${closed}&showLiquidated=${liquidated}`;
  return (
    <div className={styles.filter}>
      <div className={styles.filterInner}>
        <div className={styles.option}>
          <label className={styles.label} htmlFor="open">
            Show open positions
          </label>
          <input
            type="checkbox"
            name="open"
            value="Open"
            checked={open}
            onChange={e => setOpen(e.target.checked)}
          />
        </div>
        <div className={styles.option}>
          <label className={styles.label} htmlFor="closed">
            Show closed positions
          </label>
          <input
            type="checkbox"
            name="closed"
            value="Closed"
            checked={closed}
            onChange={e => setClosed(e.target.checked)}
          />
        </div>
        <div className={styles.option}>
          <label className={styles.label} htmlFor="liquidated">
            Show liquidated positions
          </label>
          <input
            type="checkbox"
            name="liquidated"
            value="Liquidated"
            checked={liquidated}
            onChange={e => setLiquidated(e.target.checked)}
          />
        </div>
        <Link to={filterUrl}>
          <Button small>Apply</Button>
        </Link>
      </div>
    </div>
  );
}
