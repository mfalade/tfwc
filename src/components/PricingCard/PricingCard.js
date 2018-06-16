import React from 'react';
import Banner from '../Banner';

const PricingCard = props => {
  return (
    <div className="pricing-card">
      <div className="pricing-card--header">
        <div className="pricing-card--banner">
          <Banner>
            <p>{ props.bannerText }</p>
          </Banner>
        </div>
        <div className="pricing-card--corner-triangle"></div>
      </div>
      <div className="pricing-card--body">
        <h3>{ props.title }</h3>
        <h1>NGN { props.price }</h1>

        <p>{ props.subTitle }</p>

        <div className="horizontal-rule"></div>
        <p>{ props.description }</p>
      </div>
    </div>
  );
}

export default PricingCard;