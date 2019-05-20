import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { Layout, Header, Long, Short } from "./components";

const Positions = ({ match }) => (
  <Query
    query={gql`
      {
        longs(where: { accountOwner: "${match.params.account}" }) {
          id
          timestamp
          amount
          marginDeposit
          leverage
          expires
          openPrice
          market
        }
        shorts(where: { accountOwner: "${match.params.account}" }) {
          id
          timestamp
          leverage
          expires
          openPrice
          market
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
          <h2 style={{ fontWeight: 500 }}>Long positions</h2>
          <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.longs.map(long => <Long key={long.id} long={long} />)
            )}
          </div>
          <h2 style={{ fontWeight: 500 }}>Short positions</h2>
          <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.shorts.map(short => <Short key={short.id} short={short} />)
            )}
          </div>
        </Layout>
      );
    }}
  </Query>
);

export default Positions;
