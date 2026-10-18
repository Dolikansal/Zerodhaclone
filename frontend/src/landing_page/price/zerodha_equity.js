import React, { useState } from 'react';

const ZerodhaCharges = () => {
  const [activeTab, setActiveTab] = useState('equity');

  return (
    <div className="container-fluid bg-black py-5">
      <div className="container">
        <div className="charges-card">
          <div className="card-body p-0">
            {/* Navigation Tabs */}
            <nav>
              <div className="nav nav-tabs border-bottom border-secondary" id="nav-tab" role="tablist">
                <button
                  className={`nav-link ${activeTab === 'equity' ? 'active text-primary' : 'text-light'} transition-color`}
                  onClick={() => setActiveTab('equity')}
                >
                  Equity
                </button>
                <button
                  className={`nav-link ${activeTab === 'currency' ? 'active text-primary' : 'text-light'} transition-color`}
                  onClick={() => setActiveTab('currency')}
                >
                  Currency
                </button>
                <button
                  className={`nav-link ${activeTab === 'commodity' ? 'active text-primary' : 'text-light'} transition-color`}
                  onClick={() => setActiveTab('commodity')}
                >
                  Commodity
                </button>
              </div>
            </nav>

            {/* Tab Content */}
            <div className="tab-content p-4">
              {/* Equity Tab */}
              {activeTab === 'equity' && <EquityCharges />}
              
              {/* Currency Tab */}
              {activeTab === 'currency' && <CurrencyCharges />}
              
              {/* Commodity Tab */}
              {activeTab === 'commodity' && <CommodityCharges />}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .charges-card {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          background: rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        .charges-card:hover {
          border-color: rgba(13, 110, 253, 0.3);
          box-shadow: 0 10px 30px rgba(13, 110, 253, 0.1);
        }
        .nav-tabs .nav-link {
          background: transparent;
          border: none;
          padding: 1rem 2rem;
          font-weight: 600;
        }
        .nav-tabs .nav-link.active {
          background: transparent;
          border-bottom: 3px solid #0d6efd !important;
          color: #0d6efd !important;
        }
        .nav-tabs .nav-link:hover {
          color: #0d6efd !important;
          background: rgba(13, 110, 253, 0.1);
        }
        .transition-color {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

const EquityCharges = () => (
  <div className="table-responsive">
    <table className="table table-dark table-hover table-borderless">
      <thead>
        <tr className="border-bottom border-secondary">
          <th className="text-light opacity-75"></th>
          <th className="text-primary">Equity delivery</th>
          <th className="text-primary">Equity intraday</th>
          <th className="text-primary">F&O - Futures</th>
          <th className="text-primary">F&O - Options</th>
        </tr>
      </thead>
      <tbody>
        <TableRow 
          label="Brokerage"
          values={[
            "Zero Brokerage",
            "0.03% or Rs. 20/executed order whichever is lower",
            "0.03% or Rs. 20/executed order whichever is lower",
            "Flat Rs. 20 per executed order"
          ]}
        />
        <TableRow 
          label="STT/CTT"
          values={[
            "0.1% on buy & sell",
            "0.025% on the sell side",
            "0.02% on the sell side",
            "• 0.125% of the intrinsic value on options that are bought and exercised<br>• 0.1% on sell side (on premium)"
          ]}
        />
        <TableRow 
          label="Transaction charges"
          values={[
            "NSE: 0.00297%<br>BSE: 0.00375%",
            "NSE: 0.00297%<br>BSE: 0.00375%",
            "NSE: 0.00773%<br>BSE: 0",
            "NSE: 0.03503% (on premium)<br>BSE: 0.0325% (on premium)"
          ]}
        />
        <TableRow 
          label="GST"
          values={[
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)"
          ]}
        />
        <TableRow 
          label="SEBI charges"
          values={[
            "₹10 / crore",
            "₹10 / crore",
            "₹10 / crore",
            "₹10 / crore"
          ]}
        />
        <TableRow 
          label="Stamp charges"
          values={[
            "0.015% or ₹1500 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
            "0.002% or ₹200 / crore on buy side",
            "0.003% or ₹300 / crore on buy side"
          ]}
        />
      </tbody>
    </table>
  </div>
);

const CurrencyCharges = () => (
  <div className="table-responsive">
    <table className="table table-dark table-hover table-borderless">
      <thead>
        <tr className="border-bottom border-secondary">
          <th className="text-light opacity-75"></th>
          <th className="text-primary">Currency futures</th>
          <th className="text-primary">Currency options</th>
        </tr>
      </thead>
      <tbody>
        <TableRow 
          label="Brokerage"
          values={[
            "0.03% or ₹ 20/executed order whichever is lower",
            "₹ 20/executed order"
          ]}
        />
        <TableRow 
          label="STT/CTT"
          values={[
            "No STT",
            "No STT"
          ]}
        />
        <TableRow 
          label="Transaction charges"
          values={[
            "NSE: 0.00035%<br>BSE: 0.00045%",
            "NSE: 0.0311%<br>BSE: 0.001%"
          ]}
        />
        <TableRow 
          label="GST"
          values={[
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)"
          ]}
        />
        <TableRow 
          label="SEBI charges"
          values={[
            "₹10 / crore",
            "₹10 / crore"
          ]}
        />
        <TableRow 
          label="Stamp charges"
          values={[
            "0.0001% or ₹10 / crore on buy side",
            "0.0001% or ₹10 / crore on buy side"
          ]}
        />
      </tbody>
    </table>
    <div className="mt-4 text-center">
      <p className="text-light opacity-75 mb-3 transition-slide">
        Calculate your costs upfront using our brokerage calculator
      </p>
    </div>
  </div>
);

const CommodityCharges = () => (
  <div className="table-responsive">
    <table className="table table-dark table-hover table-borderless">
      <thead>
        <tr className="border-bottom border-secondary">
          <th className="text-light opacity-75"></th>
          <th className="text-primary">Commodity futures</th>
          <th className="text-primary">Commodity options</th>
        </tr>
      </thead>
      <tbody>
        <TableRow 
          label="Brokerage"
          values={[
            "0.03% or Rs. 20/executed order whichever is lower",
            "₹ 20/executed order"
          ]}
        />
        <TableRow 
          label="STT/CTT"
          values={[
            "0.01% on sell side (Non-Agri)",
            "0.05% on sell side"
          ]}
        />
        <TableRow 
          label="Transaction charges"
          values={[
            "MCX: 0.0021%<br>NSE: 0.0001%",
            "MCX: 0.0418%<br>NSE: 0.001%"
          ]}
        />
        <TableRow 
          label="GST"
          values={[
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)"
          ]}
        />
        <TableRow 
          label="SEBI charges"
          values={[
            "Agri: ₹1 / crore<br>Non-agri: ₹10 / crore",
            "₹10 / crore"
          ]}
        />
        <TableRow 
          label="Stamp charges"
          values={[
            "0.002% or ₹200 / crore on buy side",
            "0.003% or ₹300 / crore on buy side"
          ]}
        />
      </tbody>
    </table>
    <div className="mt-4 text-center">
      <p className="text-light opacity-75 mb-3 transition-slide">
        Calculate your costs upfront using our brokerage calculator
      </p>
    </div>
  </div>
);

const TableRow = ({ label, values }) => (
  <tr className="border-bottom border-secondary transition-slide">
    <td className="fw-semibold text-light" style={{background: 'rgba(255,255,255,0.05)'}}>{label}</td>
    {values.map((value, index) => (
      <td key={index} className="text-light">
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </td>
    ))}
  </tr>
);

export default ZerodhaCharges;