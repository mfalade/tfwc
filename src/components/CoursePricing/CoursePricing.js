import React from 'react';
import { Element } from 'react-scroll';

import PricingCard from '../PricingCard';

const CoursePricing = props => {
  const pricingOptions = [
    {
      bannerText: 'best value',
      title: 'One Time Upfront Payment',
      subTitle: 'total',
      price: '37,350',
      description: `Get access to all course material for 5 weeks upfront, and save more than 5%.`,
      paymentUrl: 'https://paystack.com/pay/tfwc-onetimepayment'
    },
    {
      bannerText: 'bundle value',
      title: 'Two Class Bundle',
      subTitle: '/ two classes',
      price: '14,940',
      description: `Need only two classes? If you pick this bundle, it's cheaper than buying per class.`,
      paymentUrl: 'https://paystack.com/pay/tfwc-twoclass'
    },
    {
      bannerText: 'pay per class',
      title: 'Split Payments',
      subTitle: '/ class',
      price: '8,000',
      description: `Want to test the waters class per class? Sure, we have something for you too.`,
      paymentUrl: 'https://paystack.com/pay/tfwc-split'
    }
  ];
  return (
    <div className="section">
      <div className="course-pricing">
        <Element name="paymentSection" />
        <h1>Get Started Now</h1>

        <div className="course-pricing-wrapper">
          {
            pricingOptions.map((option, index) => (
              <PricingCard key={index} {...option} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default CoursePricing;