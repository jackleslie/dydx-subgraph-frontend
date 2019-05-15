import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Market from "../components/market"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
          />
        ))}
      </div>
      <h3 style={{ marginBottom: 10 }}>Positions</h3>
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
      }
    }
  }
`
