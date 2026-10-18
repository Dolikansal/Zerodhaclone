import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Backend authentication API endpoint
      const response = await axios.post(
        'http://localhost:3002/api/auth/login',
        formData,
        { withCredentials: true }
      );

      if (response.data.success) {
        // Token local storage mein save karo
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        } else {
          // Fallback check agar cookie-only handle kiya hai
          localStorage.setItem('token', 'logged_in');
        }
        
        // Dashboard par navigate karo
        window.location.href = '/dashboard';
      } else {
        setError(response.data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="background-gradient"></div>
      
      <div className="main-content">
        {/* Header Section */}
        <div className="header-section">
          <div className="logo">
            <h1 className="brand">Zerodha</h1>
          </div>
          <div className="welcome-text">
            <h2>Welcome Back</h2>
            <p>Sign in to access your trading dashboard</p>
          </div>
        </div>

        {/* Features List */}
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="feature-text">Secure & encrypted authentication</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="feature-text">Real-time market data access</span>
          </div>
        </div>

        {/* Error Alert */}
        {error && <div className="error-badge">{error}</div>}

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="signin-btn"
            disabled={loading}
          >
            <div className="btn-content">
              {loading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Sign In to Zerodha</span>
                </>
              )}
            </div>
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>New to Zerodha?</span>
        </div>

        {/* Sign Up Link */}
        <div className="signup-section">
          <button
            onClick={() => navigate('/signup')}
            className="signup-link"
          >
            Create your Zerodha account
          </button>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <span>🔒 Secure JWT Authentication</span>
            <span>MERN Stack Powered</span>
          </div>
        </div>

        {/* Terms */}
        <div className="terms">
          <p>
            By continuing, you agree to our{' '}
            <a href="#" className="terms-link">Terms</a>
            {' '}and{' '}
            <a href="#" className="terms-link">Privacy Policy</a>
          </p>
        </div>
      </div>

      <style>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .background-gradient {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          z-index: -1;
        }

        .main-content {
          background: rgba(30, 30, 46, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 440px;
        }

        .main-content:hover {
          border-color: rgba(13, 110, 253, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .header-section {
          text-align: center;
          margin-bottom: 25px;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          margin-left : 160px;
           margin-top:-10px;
        }

        .brand {
          color: #0d6efd;
          font-weight: 800;
          font-size: 36px;
          margin: 0;
          text-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
        }

        .welcome-text h2 {
          color: white;
          font-weight: 700;
          font-size: 24px;
          margin-bottom: 6px;
        }

        .welcome-text p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }

        .features-list {
          margin-bottom: 20px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          transition: all 0.3s ease;
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon svg {
          width: 14px;
          height: 14px;
          color: #0d6efd;
        }

        .feature-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          font-weight: 500;
        }

        .error-badge {
          background: rgba(220, 53, 69, 0.2);
          border: 1px solid rgba(220, 53, 69, 0.5);
          color: #ff6b6b;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          margin-bottom: 20px;
          text-align: center;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .input-group label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
          font-weight: 500;
        }

        .input-group input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(15, 15, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .input-group input:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 10px rgba(13, 110, 253, 0.3);
          background: rgba(20, 20, 35, 0.8);
        }

        .signin-btn {
          width: 100%;
          background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
        }

        .signin-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(13, 110, 253, 0.4);
        }

        .signin-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-content svg {
          width: 18px;
          height: 18px;
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 20px 0;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .divider span {
          background: rgba(30, 30, 46, 0.95);
          padding: 0 12px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          position: relative;
        }

        .signup-section {
          text-align: center;
          margin-bottom: 15px;
        }

        .signup-link {
          background: none;
          border: none;
          color: #0d6efd;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 6px 12px;
          border-radius: 6px;
        }

        .signup-link:hover {
          color: #0dcaf0;
          background: rgba(13, 110, 253, 0.1);
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 15px;
          margin-top: 15px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        .terms {
          text-align: center;
          margin-top: 15px;
        }

        .terms p {
          color: rgba(255, 255, 255, 0.4);
          font-size: 11px;
          margin: 0;
        }

        .terms-link {
          color: #0d6efd;
          text-decoration: none;
        }

        .terms-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default SignInPage;