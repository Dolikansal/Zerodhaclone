 import React from 'react';
 import { useNavigate } from 'react-router-dom'; 
function Open_account() {

     const navigate = useNavigate(); 
    
        const handleSignUpClick = () => {
            navigate('/signin'); 
        };
        
    return ( 
        <div className='container mt-5 text-center text-white' style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
            padding: '2rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
            <div className='row'>
                <h2 className='mt-4' style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    background: 'linear-gradient(45deg, #64b5f6, #2196f3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                    Open a Zerodha account
                </h2>
                <p className='mt-2' style={{
                    fontSize: '1.2rem',
                    color: '#e0e0e0',
                    lineHeight: '1.6',
                    transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button className='btn btn-primary mt-2' style={{
                    width: '18%', 
                    marginLeft: '450px',
                    background: 'linear-gradient(45deg, #64b5f6, #2196f3)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(100, 181, 246, 0.3)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(100, 181, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 5px 15px rgba(100, 181, 246, 0.3)';
                }}
                onClick={handleSignUpClick}
                >
                    Sign up for free
                </button>
            </div>
        </div>
     );
}

export default Open_account;