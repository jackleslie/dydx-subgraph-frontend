import PropTypes from "prop-types"
import React from "react"

import EthImage from "./ethimage"
import DaiImage from "./daiimage"
import UsdcImage from "./usdcimage"

const Market = ({ id, tokenAddress, tokenSymbol }) => (
  <div
    style={{
      boxShadow: `rgba(37, 41, 46, 0.32) 0px 10px 50px 0px`,
      borderRadius: `12px`,
      maxWidth: "200px",
      width: "100%",
      margin: "10px 0",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0, textAlign: "center" }}>
        <div style={{ padding: "0px 40px 15px 40px" }}>
          {tokenSymbol === "WETH" ? (
            <EthImage />
          ) : tokenSymbol === "DAI" ? (
            <DaiImage />
          ) : (
            <UsdcImage />
          )}
        </div>
        <a
          href={`https://etherscan.io/address/${tokenAddress}`}
          style={{
            color: `black`,
            fontWeight: 600,
          }}
        >
          {tokenSymbol}
        </a>
      </p>
    </div>
  </div>
)

Market.propTypes = {
  id: PropTypes.string,
  tokenAddress: PropTypes.string,
  tokenSymbol: PropTypes.string,
}

Market.defaultProps = {
  id: ``,
  tokenAddress: ``,
  tokenSymbol: ``,
}

export default Market
