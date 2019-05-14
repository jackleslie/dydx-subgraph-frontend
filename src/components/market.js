import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Market = ({ id, token }) => {
  let symbol
  if (id === 0) symbol = "eth"
  else if (id === 1) symbol = "dai"
  else symbol = "usdc"

  return (
    <div
      style={{
        boxShadow: `rgba(37, 41, 46, 0.32) 0px 10px 50px 0px`,
        borderRadius: `12px`,
        width: "900px",
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
        <p style={{ margin: 0 }}>
          <h5 style={{ margin: "4px 0" }}>{id}</h5>
          <a
            href={`https://etherscan.io/address/${token}`}
            style={{
              color: `black`,
            }}
          >
            {token}
          </a>
        </p>
      </div>
    </div>
  )
}

Market.propTypes = {
  id: PropTypes.string,
  token: PropTypes.string,
}

Market.defaultProps = {
  id: ``,
  token: ``,
}

export default Market
