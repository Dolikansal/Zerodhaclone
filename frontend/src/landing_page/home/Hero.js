import React from 'react';
import { useNavigate } from 'react-router-dom'; 
function Hero() {
    const navigate = useNavigate(); 

    const handleSignUpClick = () => {
        navigate('/signin'); 
    };

    return (
        <div className='container mt-5'>
            <div className='row text-center p-2'>
                <img src="media/Gemini_Generated_Image_daqbhldaqbhldaqb.png" alt="hero image" className='mb-5' style={{
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
                ></img>
                <h1 className='mt-4 text-white'>Invest In Everything</h1>
                <p className='text-white'>online platform to invest in stock , derivaties , mutual funds , and more</p>
                <button 
                    className='p-2 btn btn-primary fs-7 fw-semibold' 
                    style={{ width: "14%", margin: "0 auto", boxShadow : "0 1px 20px 10px rgba(117, 115, 110, 0.4)" }}
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
    );
}

export default Hero;