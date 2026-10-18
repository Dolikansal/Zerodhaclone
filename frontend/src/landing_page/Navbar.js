import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/signin');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="media/WhatsApp Image 2025-10-14 at 15.19.14.jpeg" height="40px" alt="App Logo" style={{marginLeft:"60px"}}/>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
                        </li>

                        {/* Conditional Rendering based on Authentication */}
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary fw-bold" aria-current="page" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item ms-2">
                                    <button 
                                        onClick={handleLogout} 
                                        className="btn btn-sm text-light fw-bold rounded-2 "
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signin">Sign In</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;