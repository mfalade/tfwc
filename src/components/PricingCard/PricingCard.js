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
      </div>
      <div className="pricing-card--body">
        <h3>{ props.title }</h3>
        <h1>NGN { props.price }</h1>

        <p>{ props.subTitle }</p>

        <div className="horizontal-rule"></div>
        <p className="pricing-card--description">{ props.description }</p>
        <div className="vmm">
          <a 
            className="btn btn-orange"
            shadow="none"
            href={props.paymentUrl}
            target="_blank"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;