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
            <div className="container-fluid px-3 px-lg-4">
                {/* Logo with responsive left margin to prevent overflow on mobile */}
                <Link className="navbar-brand py-0" to="/">
                    <img 
                        src="media/WhatsApp Image 2025-10-14 at 15.19.14.jpeg" 
                        height="40px" 
                        alt="App Logo" 
                        className="ms-2 ms-lg-5" 
                    />
                </Link>
                
                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-2 gap-lg-3">
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
                                <li className="nav-item mt-1 mt-lg-0">
                                    <button 
                                        onClick={handleLogout} 
                                        className="btn btn-sm text-light fw-bold rounded-2 px-3"
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