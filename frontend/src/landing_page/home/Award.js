import React from 'react';

function Award() {
    return (
        <div className='container mt-4 mt-md-5 px-3'>
            <div className='row align-items-center g-4'>
                {/* Left Image Section */}
                <div className='col-12 col-lg-6 text-center mb-3 mb-lg-0'>
                    <img 
                        src="media/Gemini_Generated_Image_yj8vbyj8vbyj8vby.png" 
                        alt="Award Image"
                        className="img-fluid"
                        style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                </div>
                
                {/* Right Content Section */}
                <div className='col-12 col-lg-6 text-white text-center text-lg-start'>
                    <h1 
                        className="fs-2 fs-md-1 fw-bold"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => e.target.style.color = "#64b5f6"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                        Largest stock broker in india
                    </h1>
                    
                    <p className="lead fs-6 my-3 opacity-90">
                        2+ million zerodha clients contribute to over 15% of retail order volume in india daily by trading and investing in: 
                    </p>
                    
                    {/* List Items Grid */}
                    <div className='row g-0 g-sm-2 text-start'>
                        <div className='col-6 col-sm-6'>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {['Futures and options', 'Commidity derivatives', 'Currency derivatives'].map((item, idx) => (
                                    <li 
                                        key={idx}
                                        style={{
                                            padding: "5px 0",
                                            transition: "transform 0.3s ease, color 0.3s ease",
                                            cursor: "default"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = "translateX(5px)";
                                            e.target.style.color = "#64b5f6";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = "translateX(0)";
                                            e.target.style.color = "#ffffff";
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className='col-6 col-sm-6'>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {["Stocks and IPO's", "Direct mutual funds", "Bonds and Govt. Securities"].map((item, idx) => (
                                    <li 
                                        key={idx}
                                        style={{
                                            padding: "5px 0",
                                            transition: "transform 0.3s ease, color 0.3s ease",
                                            cursor: "default"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = "translateX(5px)";
                                            e.target.style.color = "#64b5f6";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = "translateX(0)";
                                            e.target.style.color = "#ffffff";
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Partner Ecosystem Logos */}
                    <div className="text-center text-lg-start mt-3">
                        <img 
                            src="media/Gemini_Generated_Image_l9t4zal9t4zal9t4.png" 
                            alt="Press press/partners"
                            className='img-fluid mt-2' 
                            style={{ width: "100%", maxWidth: "520px", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Award;