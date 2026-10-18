import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home_page from './landing_page/home/Home_page';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About_page from './landing_page/about/About_page';
import Price_page from './landing_page/price/Price_page';
import Product_page from './landing_page/product/Product_page';
import Signup from './landing_page/signup/Signup';
import Support_page from './landing_page/support/Support_page';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Not_found from './landing_page/Not_found';
import DashboardApp from './dashboard/src/DashboardApp'; 
import SignInPage from './landing_page/signin/SignInPage';
 
function LayoutWrapper({ children, showNavbarFooter = true }) {
  return (
    <>
      {showNavbarFooter && <Navbar />}
      {children}
      {showNavbarFooter && <Footer />}
    </>
  );
}

// Auth Layout Wrapper without Footer
function AuthLayoutWrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* No Footer for auth pages */}
    </>
  );
}

// Custom Protected Route component (Replaced Clerk with standard token check)
const ProtectedRoute = ({ children }) => {
  // Check if token exists in localStorage (or check cookie)
  const isAuthenticated = localStorage.getItem("token");
  
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      {/* Public Routes with Navbar & Footer */}
      <Route path='/' element={<LayoutWrapper><Home_page /></LayoutWrapper>} />
      <Route path='/about' element={<LayoutWrapper><About_page /></LayoutWrapper>} />
      <Route path='/pricing' element={<LayoutWrapper><Price_page /></LayoutWrapper>} />
      <Route path='/product' element={<LayoutWrapper><Product_page /></LayoutWrapper>} />
      <Route path='/support' element={<LayoutWrapper><Support_page /></LayoutWrapper>} />
      
      {/* Auth Routes with Navbar but NO Footer */}
      <Route path='/signin' element={<AuthLayoutWrapper><SignInPage /></AuthLayoutWrapper>} />
      <Route path='/signup' element={<AuthLayoutWrapper><Signup /></AuthLayoutWrapper>} />
      
      {/* Protected Dashboard Route without Navbar & Footer */}
      <Route path='/dashboard/*' element={
        <ProtectedRoute>
          <LayoutWrapper showNavbarFooter={false}>
            <DashboardApp />
          </LayoutWrapper>
        </ProtectedRoute>
      } />
      
      {/* 404 Route */}
      <Route path='*' element={<LayoutWrapper><Not_found /></LayoutWrapper>} />
    </Routes>
  </BrowserRouter>
);