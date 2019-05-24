import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { Market, Layout, Header } from "../../components";
import { Search } from "../../containers";

import styles from "./index.module.css";

const Home = () => (
  <Query
    query={gql`
      {
        markets {
          id
          tokenSymbol
          tokenAddress
          lastIndexUpdate
          supplyIndex
          borrowIndex
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
          <h2 className={styles.subtitle}>Positions</h2>
          <Search />
          <h2 className={styles.subtitle}>Markets</h2>
          <div className={styles.markets}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.markets.map(market => (
                <Market key={market.id} market={market} />
              ))
            )}
          </div>
        </Layout>
      );
    }}
  </Query>
);

export default Home;
