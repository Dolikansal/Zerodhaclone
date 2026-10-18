import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(33, 150, 243, 0.8)",
          "rgba(100, 181, 246, 0.8)",
          "rgba(41, 121, 255, 0.8)",
          "rgba(30, 136, 229, 0.8)",
          "rgba(25, 118, 210, 0.8)",
          "rgba(13, 71, 161, 0.8)",
        ],
        borderColor: [
          "rgba(33, 150, 243, 1)",
          "rgba(100, 181, 246, 1)",
          "rgba(41, 121, 255, 1)",
          "rgba(30, 136, 229, 1)",
          "rgba(25, 118, 210, 1)",
          "rgba(13, 71, 161, 1)",
        ],
        borderWidth: 2,
        borderAlign: 'inner'
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e3f2fd',
          font: {
            size: 11
          },
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: '#132f4c',
        titleColor: '#e3f2fd',
        bodyColor: '#b3e5fc',
        borderColor: '#1e3c72',
        borderWidth: 1
      }
    },
    cutout: '60%',
    layout: {
      padding: 10
    }
  };

  const containerStyle = {
    backgroundColor: "transparent",
    color: "#e3f2fd",
    padding: "0",
  };

  const searchContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px"
  };

  const searchStyle = {
    flex: "1",
    padding: "10px 16px",
    backgroundColor: "#132f4c",
    border: "1px solid #1e3c72",
    borderRadius: "6px",
    color: "#e3f2fd",
    fontSize: "14px",
    outline: "none"
  };

  const countsStyle = {
    color: "#90caf9",
    fontSize: "13px",
    fontWeight: "500",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0 0 20px 0"
  };

  const chartContainerStyle = {
    backgroundColor: "#132f4c",
    border: "1px solid #1e3c72",
    borderRadius: "8px",
    padding: "16px",
    marginTop: "20px",
    height: "350px",
    position: "relative",
    width:"75%",
    marginLeft:"45px",
  };

  const chartTitleStyle = {
    color: "#e3f2fd",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0 0 15px 0",
    textAlign: "center"
  };

  return (
    <div className="watchlist-container" style={containerStyle}>
      <div className="search-container" style={searchContainerStyle}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          style={searchStyle}
        />
        <span className="counts" style={countsStyle}> {watchlist.length} / 50</span>
      </div>

      <ul className="list" style={listStyle}>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* Enhanced Chart Container */}
      <div style={chartContainerStyle}>
        <h4 style={chartTitleStyle}>Portfolio Distribution</h4>
        <DoughnutChart data={data} options={options} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #1e3c72",
    cursor: "pointer",
    transition: "background-color 0.2s ease"
  };

  const itemNameStyle = {
    color: "#e3f2fd",
    fontWeight: "500",
    fontSize: "14px",
    margin: "0"
  };

  const itemInfoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };

  const percentStyle = {
    fontSize: "13px",
    fontWeight: "500"
  };

  const priceStyle = {
    color: "#e3f2fd",
    fontSize: "14px",
    fontWeight: "500",
    minWidth: "60px",
    textAlign: "right"
  };

  return (
    <li 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: showWatchlistActions ? "#132f4c" : "transparent",
        padding: "0 8px",
        borderRadius: "4px"
      }}
    >
      <div className="item" style={itemStyle}>
        <p style={itemNameStyle}>{stock.name}</p>
        <div className="itemInfo" style={itemInfoStyle}>
          <span className="percent" style={{
            ...percentStyle, 
            color: stock.isDown ? "#ff6b6b" : "#4caf50"
          }}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown style={{ color: "#ff6b6b", fontSize: "16px" }} />
          ) : (
            <KeyboardArrowUp style={{ color: "#4caf50", fontSize: "16px" }} />
          )}
          <span className="price" style={priceStyle}>{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const actionsStyle = {
    display: "flex",
    justifyContent: "center",
    // padding: "4px 0 12px 0"
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "1px"
  };

  const buyButtonStyle = {
    background: "#4caf50",
    color: "white",
    border: "none",
    // padding: "2px 2px",
    borderRadius: "3px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(76, 175, 80, 0.2)"
  };

  const buyButtonHoverStyle = {
    background: "#45a049",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(76, 175, 80, 0.3)"
  };

  const sellButtonStyle = {
    background: "#ff6b6b",
    color: "white",
    border: "none",
    // padding: "6px 16px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(255, 107, 107, 0.2)"
  };

  const sellButtonHoverStyle = {
    background: "#ff5252",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(255, 107, 107, 0.3)"
  };

  const actionButtonStyle = {
    background: "rgba(100, 150, 255, 0.1)",
    color: "#90caf9",
    border: "1px solid rgba(100, 150, 255, 0.3)",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(100, 150, 255, 0.1)"
  };

  const actionButtonHoverStyle = {
    background: "rgba(100, 150, 255, 0.2)",
    borderColor: "rgba(100, 150, 255, 0.5)",
    color: "#e3f2fd",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(100, 150, 255, 0.2)"
  };

  return (
    <span className="actions" style={actionsStyle}>
      <span style={buttonsContainerStyle}>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button 
            className="buy" 
            style={buyButtonStyle}
            onClick={handleBuyClick}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, buyButtonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, buyButtonStyle);
            }}
          >
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button 
            className="sell" 
            style={sellButtonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, sellButtonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, sellButtonStyle);
            }}
          >
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button 
            className="action" 
            style={actionButtonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, actionButtonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, actionButtonStyle);
            }}
          >
            <BarChartOutlined style={{ fontSize: "16px" }} />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button 
            className="action" 
            style={actionButtonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, actionButtonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, actionButtonStyle);
            }}
          >
            <MoreHoriz style={{ fontSize: "16px" }} />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};