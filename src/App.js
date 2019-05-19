import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { Market, Layout, Header } from "./components";

const App = () => (
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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Layout>
          <Header
            title="dYdX subgraph"
            subtitle="Submission for the CoinList + The Graph hackathon"
          />
          <h2 style={{ fontWeight: 500 }}>Markets</h2>
          <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
            {data.markets.map(market => (
              <Market key={market.id} market={market} />
            ))}
          </div>
        </Layout>
      );
    }}
  </Query>
);

export default App;