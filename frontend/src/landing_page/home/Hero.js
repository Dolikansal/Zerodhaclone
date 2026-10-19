import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Hero() {
    const navigate = useNavigate(); 

    const handleSignUpClick = () => {
        navigate('/signin'); 
    };

    return (
        <div className='container mt-4 mt-md-5 px-3'>
            <div className='row text-center justify-content-center p-2'>
                <div className='col-12 col-lg-11 mb-4 mb-md-5'>
                    <img 
                        src="media/Gemini_Generated_Image_daqbhldaqbhldaqb.png" 
                        alt="hero image" 
                        className='img-fluid w-100' 
                        style={{
                            borderRadius: "10px",
                            transition: "all 0.3s ease",
                            boxShadow : "0 1px 20px 10px rgba(117, 115, 110, 0.4)"
                        }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 1px 20px 10px rgba(240, 239, 233, 0.4)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 1px 20px 10px rgba(117, 115, 110, 0.4)";
                        }}
                    />
                </div>
                <div className='col-12'>
                    <h1 className='mt-2 mt-md-4 text-white fs-2 fs-md-1 fw-bold'>Invest In Everything</h1>
                    <p className='text-white fs-6 opacity-75 px-2'>
                        online platform to invest in stock , derivaties , mutual funds , and more
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                        <button 
                            className='p-2 btn btn-primary fs-6 fw-semibold style-btn' 
                            style={{ 
                                minWidth: "160px",
                                maxWidth: "220px", 
                                width: "100%",
                                boxShadow : "0 1px 20px 10px rgba(117, 115, 110, 0.4)" 
                            }}
                            onMouseOver={(e) => {
                                e.target.style.boxShadow = "0 1px 10px 5px rgba(240, 239, 233, 0.4)";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.boxShadow = "0 1px 20px 10px rgba(117, 115, 110, 0.4)";
                            }}
                            onClick={handleSignUpClick} 
                        >
                            Sign in now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;