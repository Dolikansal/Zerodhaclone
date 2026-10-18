import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const DashboardApp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage (MERN custom auth check)
    const token = localStorage.getItem("token");
    if (!token) {
      // If user is not signed in, redirect to signin
      navigate('/signin', { replace: true });
    }
  }, [navigate]);

  // Optional: Safety check before rendering children
  const token = localStorage.getItem("token");
  if (!token) {
    return <div>Redirecting to sign in...</div>;
  }

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default DashboardApp;