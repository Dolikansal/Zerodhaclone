import React from 'react';

function Footer() {
    return ( 
        <footer className="bg-dark text-white pt-5 position-relative mt-5 overflow-hidden" style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
            borderTop: '3px solid #00b4d8'
        }}>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                background: 'radial-gradient(circle at 20% 80%, rgba(0, 180, 216, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
            }}></div>
            
            <div className='container mt-3 position-relative px-3 px-md-4'>
                <div className='row mt-3 g-4'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-2 mb-lg-0'>
                        <div className="d-flex flex-column h-100">
                            <h2 className='text-primary fs-1'>Zerodha</h2>
                            <p className="text-light opacity-75 mt-2" style={{fontSize: '0.9rem'}}>
                                2010 - 2025, Zerodha Broking Ltd. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-6 mb-3 mb-lg-0'>
                        <h3 className="h5 mb-3 text-info fw-bold">Account</h3>
                        <div className="d-flex flex-column">
                            {['Open demat account', 'Minor demat account', 'NRI demat account', 'Commodity', 'Dematerialisation', 'Fund transfer', 'MTF', 'Referral program'].map((link, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="text-decoration-none text-light opacity-75 py-1 transition-all hover-lift"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        fontSize: '0.9rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#00b4d8';
                                        e.target.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-6 mb-3 mb-lg-0'>
                        <h3 className="h5 mb-3 text-info fw-bold">Support</h3>
                        <div className="d-flex flex-column">
                            {['Contact us', 'Support portal', 'How to file a complaint?', 'Status of your complaints', 'Bulletin', 'Circular', 'Z-Connect blog', 'Downloads'].map((link, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="text-decoration-none text-light opacity-75 py-1 transition-all hover-lift"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        fontSize: '0.9rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#00b4d8';
                                        e.target.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-6 mb-3 mb-lg-0'>
                        <h3 className="h5 mb-3 text-info fw-bold">Company</h3>
                        <div className="d-flex flex-column">
                            {['About', 'Philosophy', 'Press & media', 'Careers', 'Zerodha Cares (CSR)', 'Zerodha.tech', 'Open source'].map((link, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="text-decoration-none text-light opacity-75 py-1 transition-all hover-lift"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        fontSize: '0.9rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#00b4d8';
                                        e.target.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-6 mb-3 mb-lg-0'>
                        <h3 className="h5 mb-3 text-info fw-bold">Quick links</h3>
                        <div className="d-flex flex-column">
                            {['Upcoming IPOs', 'Brokerage charges', 'Market holidays', 'Economic calendar', 'Calculators', 'Markets', 'Sectors'].map((link, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="text-decoration-none text-light opacity-75 py-1 transition-all hover-lift"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        fontSize: '0.9rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#00b4d8';
                                        e.target.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='row mt-5 pt-4 border-top border-secondary'>
                    <div className='col-12'>
                        <div 
                            className="text-light opacity-75 transition-all"
                            style={{
                                fontSize: '0.75rem',
                                lineHeight: '1.6',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <p className="mb-3">
                                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                            </p>
                            <p className="mb-3">
                                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                            </p>
                            <p className="mb-3">Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                            <p className="mb-3">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                            <p className="mb-3 fw-bold text-info">Attention investors:</p>
                            <ol className="mb-3 ps-3">
                                <li className="mb-2">
                                    <p className="mb-0">Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020</p>
                                </li>
                                <li className="mb-2">
                                    <p className="mb-0">Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge</p>
                                </li>
                                <li className="mb-2">
                                    <p className="mb-0">Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                                </li>
                            </ol>
                            <p className="mb-3">
                                India's largest broker based on networth as per NSE. NSE broker factsheet
                            </p>
                            <p className="mb-0">
                                Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="row mt-4 pt-3 border-top border-secondary pb-3">
                    <div className="col-12 text-center">
                        <p className="text-light opacity-50 mb-0" style={{fontSize: '0.8rem'}}>
                            &copy; 2010 - 2025 Zerodha Broking Ltd. | Made with ❤️ for Traders
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;