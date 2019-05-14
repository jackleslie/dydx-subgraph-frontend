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
          justifyContent: "space-between",
        }}
      >
        {data.dydx.markets.map(market => (
          <Market key={market.id} id={market.id} token={market.token} />
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
        token
      }
    }
  }
`
