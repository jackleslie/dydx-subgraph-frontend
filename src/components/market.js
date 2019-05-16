import PropTypes from "prop-types"
import React from "react"

import EthImage from "./ethimage"
import DaiImage from "./daiimage"
import UsdcImage from "./usdcimage"

const Market = ({
  id,
  tokenAddress,
  tokenSymbol,
  lastIndexUpdate,
  borrowIndex,
  supplyIndex,
}) => {
  var a = new Date(lastIndexUpdate * 1000)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var hour = a.getHours()
  var min = a.getMinutes()
  var sec = a.getSeconds()
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec
  return (
    <div
      style={{
        boxShadow: `rgba(37, 41, 46, 0.32) 0px 10px 50px 0px`,
        borderRadius: `12px`,
        maxWidth: "300px",
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
          <div style={{ padding: "0px 60px 15px 60px" }}>
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
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            {tokenSymbol}
          </a>
          <p style={{ paddingTop: "10px", fontWeight: 600 }}>
            Last index update
            <br />
            <span style={{ fontWeight: 400, color: "#454851" }}>{time}</span>
          </p>
          <p style={{ fontWeight: 600 }}>
            Accrued borrow interest
            <br />
            <span style={{ fontWeight: 400, color: "#454851" }}>
              {`${((borrowIndex / 1000000000000000000 - 1) * 100).toFixed(2)}%`}
            </span>
          </p>
          <p style={{ fontWeight: 600 }}>
            Accrued supply interest
            <br />
            <span style={{ fontWeight: 400, color: "#454851" }}>
              {`${((supplyIndex / 1000000000000000000 - 1) * 100).toFixed(2)}%`}
            </span>
          </p>
        </p>
      </div>
    </div>
  )
}

Market.propTypes = {
  id: PropTypes.string,
  tokenAddress: PropTypes.string,
  tokenSymbol: PropTypes.string,
  lastIndexUpdate: PropTypes.string,
}

Market.defaultProps = {
  id: ``,
  tokenAddress: ``,
  tokenSymbol: ``,
  lastIndexUpdate: ``,
}

export default Market
