import React from 'react';
import { useNavigate } from 'react-router-dom';
function Stats() {
    const navigate = useNavigate(); 
    const handleExploreProducts = () => {
        navigate('/product'); 
    };

    return ( 
       <div className='container' style={{marginTop:"110px", marginBottom:"100px"}}>
        <div className='row text-white'>
            <div className='col-6'>
                <h1 className='mb-5 fs-2' style={{
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#64b5f6"}
                onMouseLeave={(e) => e.target.style.color = "#ffffff"}>
                    Trust with Confidence
                </h1>
                
                <h2 className='fs-3' style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = "#64b5f6";
                    e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(0)";
                }}>
                    Custmor-first always
                </h2>
                <p style={{
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#e0e0e0"}
                onMouseLeave={(e) => e.target.style.color = "#b0b0b0"}>
                    That's why 1.3+ crore customer trust zerodha with 3.5+ lakhs crores worth of equality investment .
                </p>
                
                <h2 className='fs-3' style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = "#64b5f6";
                    e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(0)";
                }}>
                    No spam of gimmicks
                </h2>
                <p style={{
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#e0e0e0"}
                onMouseLeave={(e) => e.target.style.color = "#b0b0b0"}>
                    No gimmicks , spam , "gimmification" , or annoying push notifications . High quality app that you use at your pace, the way you like .
                </p>
                
                <h2 className='fs-3' style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = "#64b5f6";
                    e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(0)";
                }}>
                    The Zerodha universe
                </h2>
                <p style={{
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#e0e0e0"}
                onMouseLeave={(e) => e.target.style.color = "#b0b0b0"}>
                    Not just an app , but a whole ecosystem. our investment in 30+ fintech startups offer you tailored service specific to your needs.
                </p>
                
                <h2 className='fs-3' style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = "#64b5f6";
                    e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(0)";
                }}>
                    Do better with money
                </h2>
                <p style={{
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#e0e0e0"}
                onMouseLeave={(e) => e.target.style.color = "#b0b0b0"}>
                    With initative like Nudge and Kill switch, we dont just faciliate transactions, but actively help you do better with your money . 
                </p>
                
                <div className='link-primary mt-4' style={{cursor:"pointer"}}>
                    <a 
                        href='#' 
                        className='mx-5' 
                        style={{
                            textDecoration:"none",
                            transition: "all 0.3s ease",
                            color: "#64b5f6"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#2196f3";
                            e.target.style.textDecoration = "underline";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#64b5f6";
                            e.target.style.textDecoration = "none";
                        }}
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            handleExploreProducts(); // Call navigation function
                        }}
                    >
                        Explore our products
                    </a>
                    <a href='' className='mx-2' style={{
                        textDecoration:"none",
                        transition: "all 0.3s ease",
                        color: "#64b5f6"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = "#2196f3";
                        e.target.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = "#64b5f6";
                        e.target.style.textDecoration = "none";
                    }}>
                        Try kite demo
                    </a>
                </div>
            </div>
            <div className='col-6'>
                <img src="media/Gemini_Generated_Image_audplvaudplvaudp.png" style={{height:"550px" }} alt="Trust with confidence"></img>
            </div>
        </div>
       </div>
     );
}

export default Stats;