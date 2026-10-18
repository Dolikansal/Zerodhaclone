import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/orders')) setSelectedMenu(1);
    else if (path.includes('/holdings')) setSelectedMenu(2);
    else if (path.includes('/positions')) setSelectedMenu(3);
    else if (path.includes('/funds')) setSelectedMenu(4);
    else setSelectedMenu(0); 
  }, [location]);

  // Logout handler to clear MERN token and redirect to signin
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/signin');
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menusStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  const menuListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    alignItems: "center",
    marginLeft: "235px",
    gap: "20px"
  };

  const baseMenuStyle = {
    color: "#b3e5fc",
    fontSize: "14px",
    fontWeight: "400",
    margin: "0",
    padding: "8px 0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    display: "block"
  };

  const activeMenuStyle = {
    ...baseMenuStyle,
    color: "#ffffff",
    fontWeight: "500",
    borderBottom: "2px solid #2196f3"
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    marginRight: "6px"
  };

  const logoutBtnStyle = {
    background: "rgba(220, 53, 69, 0.2)",
    border: "1px solid rgba(220, 53, 69, 0.4)",
    color: "#ff6b6b",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  };

  return (
    <div className="menu-container" style={containerStyle}>
      <div className="menus" style={menusStyle}>
        <ul style={menuListStyle}>
          <li>
            <Link to="/dashboard" style={selectedMenu === 0 ? activeMenuStyle : baseMenuStyle}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders" style={selectedMenu === 1 ? activeMenuStyle : baseMenuStyle}>
              Orders
            </Link>
          </li>
          <li>
            <Link to="/dashboard/holdings" style={selectedMenu === 2 ? activeMenuStyle : baseMenuStyle}>
              Holdings
            </Link>
          </li>
          <li>
            <Link to="/dashboard/positions" style={selectedMenu === 3 ? activeMenuStyle : baseMenuStyle}>
              Positions
            </Link>
          </li>
          <li>
            <Link to="/dashboard/funds" style={selectedMenu === 4 ? activeMenuStyle : baseMenuStyle}>
              Funds
            </Link>
          </li>
        </ul>
        
        <div className="profile" style={profileStyle}>
          <button onClick={handleLogout} style={logoutBtnStyle}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;