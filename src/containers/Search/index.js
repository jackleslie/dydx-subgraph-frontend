import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input, Button } from "../../components";

import styles from "./index.module.css";

export default function Search({ ...props }) {
  const [inputAddress, setInputAddress] = useState();
  return (
    <div className={styles.search}>
      <Input setInputAddress={setInputAddress} />
      <Link to={`/positions/${inputAddress}`}>
        <Button>Search</Button>
      </Link>
    </div>
  );
}
