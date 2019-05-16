import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Market from "../components/market"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h3 style={{ marginBottom: 10 }}>Positions</h3>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          id="address"
          name="address"
          required
          minlength="42"
          maxlength="42"
          placeholder="ETH address (0xab12...)"
          style={{
            flexGrow: 1,
            padding: "20px",
            fontFamily: "system-ui",
            fontSize: "20px",
          }}
        />
      </div>
      <h3 style={{ marginBottom: 10 }}>Markets</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.dydx.markets.map(market => (
          <Market
            key={market.id}
            id={market.id}
            tokenAddress={market.tokenAddress}
            tokenSymbol={market.tokenSymbol}
            lastIndexUpdate={market.lastIndexUpdate}
            borrowIndex={market.borrowIndex}
            supplyIndex={market.supplyIndex}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    dydx {
      markets {
        id
        tokenAddress
        tokenSymbol
        lastIndexUpdate
        borrowIndex
        supplyIndex
      }
    }
  }
`
