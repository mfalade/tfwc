import React from 'react';

import PricingCard from '../PricingCard';
import { Button } from '../FormElements';

const CoursePricing = props => {
  const pricingOptions = [
    { 
      bannerText: 'best value',
      title: 'One Time Upfront Payment', 
      subTitle: 'total', 
      price: '37,350', 
      description: `Get access to all course material for 5 weeks upfront, and save more than 5%.`
    },
    { 
      bannerText: 'bundle value',
      title: 'Two Class Bundle', 
      subTitle: '/ two classes', 
      price: '14,940', 
      description: `Need only two classes? If you pick this bundle, it's cheaper than buying per class.`
    },
    { 
      bannerText: 'pay per class',
      title: 'Split Payments', 
      subTitle: '/ class', 
      price: '8,000', 
      description: `Want to test the waters class per class? Sure, we have something for you too.`
    }
  ];
  return (
    <div className="course-pricing">
      <h1>Get Started Now</h1>

      <div className="course-pricing-wrapper">
        {
          pricingOptions.map((option, index) => (
            <PricingCard key={index} { ...option} />
          ))
        }
      </div>

      <div className="mtl">
        <Button 
          size="large"
          text="GET STARTED NOW"
        />
      </div>
    </div>
  );
}

export default CoursePricing;