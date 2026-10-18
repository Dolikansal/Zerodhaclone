import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("https://zerodhaclone-hph4.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  // Overlay style for the popup background
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  };

  const containerStyle = {
    backgroundColor: "#0a1929",
    border: "2px solid #1e3c72",
    borderRadius: "12px",
    padding: "20px",
    color: "#e3f2fd",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
    minWidth: "320px",
    maxWidth: "400px",
    zIndex: 1001,
    position: "relative"
  };

  const titleStyle = {
    color: "#e3f2fd",
    fontSize: "18px",
    fontWeight: "600",
    margin: "0 0 20px 0",
    textAlign: "center",
    borderBottom: "1px solid #1e3c72",
    paddingBottom: "10px"
  };

  const inputsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "20px"
  };

  const fieldsetStyle = {
    border: "1px solid #1e3c72",
    borderRadius: "8px",
    padding: "10px",
    margin: "0",
    position: "relative"
  };

  const legendStyle = {
    color: "#90caf9",
    fontSize: "12px",
    fontWeight: "500",
    padding: "0 8px",
    background: "#0a1929"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#132f4c",
    border: "1px solid #1e3c72",
    borderRadius: "4px",
    color: "#e3f2fd",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box"
  };

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #1e3c72",
    paddingTop: "16px"
  };

  const marginTextStyle = {
    color: "#b3e5fc",
    fontSize: "13px",
    fontWeight: "500"
  };

  const buttonsGroupStyle = {
    display: "flex",
    gap: "10px"
  };

  const buyButtonStyle = {
    background: "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block"
  };

  const buyButtonHoverStyle = {
    background: "linear-gradient(135deg, #45a049 0%, #3d8b40 100%)",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)"
  };

  const cancelButtonStyle = {
    background: "rgba(100, 150, 255, 0.1)",
    color: "#90caf9",
    border: "1px solid #1e3c72",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block"
  };

  const cancelButtonHoverStyle = {
    background: "rgba(100, 150, 255, 0.2)",
    color: "#e3f2fd",
    borderColor: "#2196f3"
  };

  return (
    <div style={overlayStyle}>
      <div className="container" id="buy-window" style={containerStyle}>
        <h3 style={titleStyle}>Buy {uid}</h3>
        
        <div className="regular-order" style={inputsContainerStyle}>
          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              style={inputStyle}
              min="1"
            />
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              style={inputStyle}
              min="0"
            />
          </fieldset>
        </div>

        <div className="buttons" style={buttonsContainerStyle}>
          <span style={marginTextStyle}>Margin required ₹140.65</span>
          <div style={buttonsGroupStyle}>
            <Link 
              className="btn btn-blue" 
              onClick={handleBuyClick}
              style={buyButtonStyle}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, buyButtonHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, buyButtonStyle);
              }}
            >
              Buy
            </Link>
            <Link 
              to="" 
              className="btn btn-grey" 
              onClick={handleCancelClick}
              style={cancelButtonStyle}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, cancelButtonHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, cancelButtonStyle);
              }}
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;