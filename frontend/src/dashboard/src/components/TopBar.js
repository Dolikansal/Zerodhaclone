import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu.js";

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const containerStyle = {
    display: "flex",
    backgroundColor: "#0a1929",
    borderBottom: "1px solid rgba(100, 150, 255, 0.1)",
    width: "100%",
    boxSizing: "border-box"
  };

  const indicesContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const indexStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "180px"
  };

  const indexNameStyle = {
    color: "#b3e5fc",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0"
  };

  const indexPointsStyle = {
    color: "#4caf50",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0"
  };

  const logoStyle = {
    color: "#2196f3",
    cursor: "pointer",
    transition: "all 0.3s ease"
  };

  const zerostyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="topbar-container" style={containerStyle}>
      <div className="indices-container" style={indicesContainerStyle}>
        <div className="logo" style={zerostyle}>
          <h3 
            className="zer" 
            style={logoStyle}
            onClick={handleLogoClick}
            onMouseEnter={(e) => {
              e.target.style.color = "#42a5f5";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#2196f3";
              e.target.style.transform = "scale(1)";
            }}
          >
            Zerodha
          </h3>
        </div>
        <div className="sensex" style={indexStyle}>
          <p className="index" style={indexNameStyle}>SENSEX</p>
          <p className="index-points" style={indexPointsStyle}>{100.2}</p>
          <p className="percent" style={indexPointsStyle}>(+0.15%)</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;