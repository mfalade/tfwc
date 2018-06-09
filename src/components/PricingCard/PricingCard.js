import React from 'react';

const PricingCard = props => {
  return (
    <div className="pricing-card">
      <div className="pricing-card--header">
        <div className="pricing-card--banner">
          <div className="banner-content">
            <h5>best value</h5>
          </div>
        </div>
        <div className="pricing-card--corner-triangle"></div>
      </div>
      <div className="pricing-card--body">
        <h3>One Time Upfront Payment</h3>
        <h1>NGN 37, 350</h1>

        <p>total</p>

        <div className="horizontal-rule"></div>
        <p>
          Complete your Nanodegree program in 8 months or less and save! 
          The average completion time for this program is 8 months.
        </p>
      </div>
    </div>
  );
}

export default PricingCard;