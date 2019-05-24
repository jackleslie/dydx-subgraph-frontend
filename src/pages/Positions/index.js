import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import queryString from "query-string";

import { Layout, Header, Long, Short } from "../../components";
import { Filter } from "../../containers";

import styles from "./index.module.css";

const Positions = ({ match, location }) => {
  const { showOpen, showClosed, showLiquidated } = queryString.parse(
    location.search
  );
  let statusQueryString = "";
  let statusArray = [];
  if (showOpen === "true") {
    statusArray.push(`"Open"`);
  }
  if (showClosed === "true") {
    statusArray.push(`"Closed"`);
  }
  if (showLiquidated === "true") {
    statusArray.push(`"Liquidated"`);
  }
  if (statusArray.length > 0) {
    statusQueryString = ` status_in: [${statusArray.join()}]`;
  }
  return (
    <Query
      query={gql`
      {
        longs(where: { accountOwner: "${
          match.params.account
        }"${statusQueryString} }) {
          id
          timestamp
          amount
          marginDeposit
          leverage
          expires
          openPrice
          market
          status
        }
        shorts(where: { accountOwner: "${
          match.params.account
        }"${statusQueryString} }) {
          id
          timestamp
          amount
          marginDeposit
          leverage
          expires
          openPrice
          market
          status
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if (error) return <p>Error :(</p>;

        return (
          <Layout>
            <Header
              title="dYdX subgraph"
              subtitle="Submission for the CoinList + The Graph hackathon"
            />
            <Filter match={match} location={location} />
            {loading && <p>Loading...</p>}
            {data && data.longs && data.longs.length > 0 && (
              <h2 className={styles.subtitle}>Long positions</h2>
            )}
            <div className={styles.positions}>
              {!loading &&
                data.longs.map(long => <Long key={long.id} long={long} />)}
            </div>
            {data && data.shorts && data.shorts.length > 0 && (
              <h2 className={styles.subtitle}>Short positions</h2>
            )}
            <div className={styles.positions}>
              {!loading &&
                data.shorts.map(short => (
                  <Short key={short.id} short={short} />
                ))}
            </div>
          </Layout>
        );
      }}
    </Query>
  );
};

export default Positions;
