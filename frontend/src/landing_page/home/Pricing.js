import React from 'react';
import { useNavigate } from 'react-router-dom';
function Pricing() {
    const navigate = useNavigate(); 
        const handleExploreProducts = () => {
            navigate('/pricing'); 
        };
    return (
        <div className='container mt-5' style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
            padding: '3rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
            <div className='row align-items-center'>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <h1 style={{
                        color: '#ffffff',
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        background: 'linear-gradient(45deg, #64b5f6, #2196f3)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Unbeatable Pricing
                    </h1>
                    <p style={{
                        color: '#b0b0b0',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '2rem'
                    }}>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a style={{
                        color: '#64b5f6',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        borderBottom: '2px solid transparent',
                        paddingBottom: '2px'
                    }} 
                    onMouseEnter={(e) => {
                        e.target.style.color = '#2196f3';
                        e.target.style.borderBottomColor = '#2196f3';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = '#64b5f6';
                        e.target.style.borderBottomColor = 'transparent';
                    }}
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleExploreProducts(); 
                    }}
                    >
                        See Pricing →
                    </a>
                </div>
                
                <div className='col-lg-2 d-none d-lg-block'></div>
                
                <div className='col-lg-6 col-md-12'>
                    <div className='row text-center justify-content-center'>
                        <div className='col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-3'>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(100, 181, 246, 0.2)',
                                borderRadius: '12px',
                                padding: '1.5rem 0.5rem',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                height: '180px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: '150px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(100, 181, 246, 0.1)';
                                e.currentTarget.style.borderColor = '#64b5f6';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(100, 181, 246, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(100, 181, 246, 0.2)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    fontSize: '2rem',
                                    marginBottom: '0.8rem'
                                }}>💸</div>
                                <h1 style={{
                                    color: '#64b5f6',
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    marginBottom: '0.8rem',
                                    lineHeight: '1'
                                }}>₹0</h1>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '0.9rem',
                                    margin: '0',
                                    lineHeight: '1.3'
                                }}>Free account opening</p>
                            </div>
                        </div>
                        
                        <div className='col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-3'>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(100, 181, 246, 0.2)',
                                borderRadius: '12px',
                                padding: '1.5rem 0.5rem',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                height: '180px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: '150px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(100, 181, 246, 0.1)';
                                e.currentTarget.style.borderColor = '#64b5f6';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(100, 181, 246, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(100, 181, 246, 0.2)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    fontSize: '2rem',
                                    marginBottom: '0.8rem'
                                }}>📈</div>
                                <h1 style={{
                                    color: '#64b5f6',
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    marginBottom: '0.8rem',
                                    lineHeight: '1'
                                }}>₹0</h1>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '0.9rem',
                                    margin: '0',
                                    lineHeight: '1.3'
                                }}>Free equity & mutual funds</p>
                            </div>
                        </div>
                        
                        <div className='col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-3'>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(100, 181, 246, 0.2)',
                                borderRadius: '12px',
                                padding: '1.5rem 0.5rem',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                height: '180px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: '150px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(100, 181, 246, 0.1)';
                                e.currentTarget.style.borderColor = '#64b5f6';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(100, 181, 246, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(100, 181, 246, 0.2)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    fontSize: '2rem',
                                    marginBottom: '0.8rem'
                                }}>⚡</div>
                                <h1 style={{
                                    color: '#64b5f6',
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    marginBottom: '0.8rem',
                                    lineHeight: '1'
                                }}>₹20</h1>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '0.9rem',
                                    margin: '0',
                                    lineHeight: '1.3'
                                }}>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;