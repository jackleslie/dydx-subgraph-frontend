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
          status
        }
        shorts(where: { accountOwner: "${match.params.account}" }) {
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
          {loading && <p>Loading...</p>}
          {data && data.longs && data.longs.length > 0 && (
            <h2 style={{ fontWeight: 500 }}>Long positions</h2>
          )}
          <div
            style={{
              width: "80%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {!loading &&
              data.longs.map(long => <Long key={long.id} long={long} />)}
          </div>
          {data && data.shorts && data.shorts.length > 0 && (
            <h2 style={{ fontWeight: 500 }}>Short positions</h2>
          )}
          <div
            style={{
              width: "80%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {!loading &&
              data.shorts.map(short => <Short key={short.id} short={short} />)}
          </div>
        </Layout>
      );
    }}
  </Query>
);

export default Positions;
