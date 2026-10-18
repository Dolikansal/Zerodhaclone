import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://zerodhaclone-hph4.onrender.com/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(33, 150, 243, 0.8)",
        borderColor: "rgba(33, 150, 243, 1)",
        borderWidth: 2,
      },
    ],
  };

  const containerStyle = {
    backgroundColor: "#0a1929",
    color: "#e3f2fd",
    padding: "20px",
    minHeight: "100vh"
  };

  const titleStyle = {
    color: "#e3f2fd",
    fontWeight: "300",
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    padding: "1rem 1.5rem",
    borderRadius: "12px",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    display: "inline-block"
  };

  const tableContainerStyle = {
    backgroundColor: "#132f4c",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(100, 150, 255, 0.15)",
    overflow: "hidden",
    marginBottom: "2rem"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    color: "#e3f2fd"
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    color: "#e3f2fd",
    padding: "1rem 0.75rem",
    textAlign: "left",
    fontWeight: "500",
    fontSize: "0.85rem",
    borderBottom: "2px solid rgba(100, 150, 255, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  };

  const cellStyle = {
    padding: "1rem 0.75rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "0.9rem"
  };

  const profitStyle = {
    color: "#4caf50",
    fontWeight: "600",
    fontSize: "0.9rem"
  };

  const lossStyle = {
    color: "#ff6b6b",
    fontWeight: "600",
    fontSize: "0.9rem"
  };

  const summaryRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "2rem",
    flexWrap: "wrap"
  };

  const summaryColStyle = {
    flex: "1",
    minWidth: "200px",
    background: "linear-gradient(135deg, #132f4c 0%, #1a237e 100%)",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(100, 150, 255, 0.2)"
  };

  return (
    <div style={containerStyle}>
      {/* Title */}
      <h3 style={titleStyle}>💼 Holdings ({allHoldings.length})</h3>

      {/* Table */}
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>Instrument</th>
              <th style={headerStyle}>Qty.</th>
              <th style={headerStyle}>Avg. cost</th>
              <th style={headerStyle}>LTP</th>
              <th style={headerStyle}>Cur. val</th>
              <th style={headerStyle}>P&L</th>
              <th style={headerStyle}>Net chg.</th>
              <th style={headerStyle}>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              const pnlValue = (curValue - stock.avg * stock.qty).toFixed(2);

              return (
                <tr 
                  key={index}
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    backgroundColor: index % 2 === 0 ? "rgba(100, 150, 255, 0.05)" : "transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(100, 150, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? "rgba(100, 150, 255, 0.05)" : "transparent";
                  }}
                >
                  <td style={{...cellStyle, fontWeight: "500"}}>
                    <span style={{
                      background: "rgba(33, 150, 243, 0.2)",
                      color: "#64b5f6",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      fontWeight: "500"
                    }}>
                      {stock.name}
                    </span>
                  </td>
                  <td style={cellStyle}>{stock.qty}</td>
                  <td style={cellStyle}>₹{stock.avg.toFixed(2)}</td>
                  <td style={cellStyle}>₹{stock.price.toFixed(2)}</td>
                  <td style={cellStyle}>₹{curValue.toFixed(2)}</td>
                  <td style={{
                    ...cellStyle,
                    ...(isProfit ? profitStyle : lossStyle)
                  }}>
                    ₹{pnlValue}
                    {isProfit ? " 📈" : " 📉"}
                  </td>
                  <td style={{
                    ...cellStyle,
                    ...(isProfit ? profitStyle : lossStyle)
                  }}>
                    {stock.net}
                    {isProfit ? " 🔺" : " 🔻"}
                  </td>
                  <td style={{
                    ...cellStyle,
                    ...(stock.isLoss ? lossStyle : profitStyle)
                  }}>
                    {stock.day}
                    {stock.isLoss ? " 🔻" : " 🔺"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div style={summaryRowStyle}>
        <div style={summaryColStyle}>
          <h5 style={{ 
            color: "#e3f2fd", 
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
            ₹29,875.<span style={{ fontSize: "1rem" }}>55</span>
          </h5>
          <p style={{ 
            color: "#b3e5fc", 
            margin: 0,
            fontSize: "0.9rem"
          }}>
            Total investment
          </p>
        </div>
        <div style={summaryColStyle}>
          <h5 style={{ 
            color: "#e3f2fd", 
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
            ₹31,428.<span style={{ fontSize: "1rem" }}>95</span>
          </h5>
          <p style={{ 
            color: "#b3e5fc", 
            margin: 0,
            fontSize: "0.9rem"
          }}>
            Current value
          </p>
        </div>
        <div style={summaryColStyle}>
          <h5 style={{ 
            color: "#4caf50", 
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
            ₹1,553.40 <span style={{ fontSize: "1rem", color: "#4caf50" }}>(+5.20%)</span>
          </h5>
          <p style={{ 
            color: "#b3e5fc", 
            margin: 0,
            fontSize: "0.9rem"
          }}>
            P&L
          </p>
        </div>
      </div>

      {/* Graph */}
      <div style={{
        backgroundColor: "#132f4c",
        borderRadius: "16px",
        padding: "1.5rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(100, 150, 255, 0.15)",
      }}>
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;