import React from 'react';

function Education() {
    return ( 
        <div className='container mt-4 mt-md-5 px-3 px-md-4 text-white'>
            <div className='row align-items-center g-4'>
                {/* Left Section - Image */}
                <div className='col-lg-6 col-md-12 text-center mb-3 mb-lg-0'>
                    <img 
                        src="media/Gemini_Generated_Image_q9dz23q9dz23q9dz.png" 
                        alt="Education" 
                        className="img-fluid"
                        style={{ 
                            maxHeight: "380px", 
                            width: "auto", 
                            objectFit: "contain" 
                        }}
                    />
                </div>

                {/* Right Section - Cards */}
                <div className='col-lg-6 col-md-12 d-flex flex-column justify-content-center text-center text-lg-start'>
                    <h2 className='fs-2 mb-3 mb-md-4 fw-bold' style={{
                        color: "#ffffff",
                        transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#64b5f6"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}>
                        Free and open market education
                    </h2>
                    
                    {/* Card 1 - Varsity */}
                    <div className='p-3 p-md-4 mb-3 text-start' style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        border: "1px solid rgba(100, 181, 246, 0.1)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.3)";
                        e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                    }}>
                        <p style={{
                            color: "#e0e0e0",
                            marginBottom: "1rem",
                            transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                        onMouseLeave={(e) => e.target.style.color = "#e0e0e0"}>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="#" style={{
                            textDecoration: "none",
                            color: "#64b5f6",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            display: "inline-block"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#2196f3";
                            e.target.style.textDecoration = "underline";
                            e.target.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#64b5f6";
                            e.target.style.textDecoration = "none";
                            e.target.style.transform = "translateX(0)";
                        }}>
                            Varsity →
                        </a>
                    </div>
                    
                    {/* Card 2 - TradingQ&A */}
                    <div className='p-3 p-md-4 text-start' style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        border: "1px solid rgba(100, 181, 246, 0.1)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.3)";
                        e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                    }}>
                        <p style={{
                            color: "#e0e0e0",
                            marginBottom: "1rem",
                            transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                        onMouseLeave={(e) => e.target.style.color = "#e0e0e0"}>
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="#" style={{
                            textDecoration: "none",
                            color: "#64b5f6",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            display: "inline-block"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#2196f3";
                            e.target.style.textDecoration = "underline";
                            e.target.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#64b5f6";
                            e.target.style.textDecoration = "none";
                            e.target.style.transform = "translateX(0)";
                        }}>
                            TradingQ&A →
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;