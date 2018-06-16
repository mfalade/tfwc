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
      description: 'Complete your Nanodegree program in 8 months or less and save! The average completion time for this program is 8 months.' 
    },
    { 
      bannerText: 'bundle value',
      title: 'Two Class Bundle', 
      subTitle: '/ two classes', 
      price: '14,940', 
      description: 'Learn at your own pace, and manage your expenses monthly.' 
    },
    { 
      bannerText: 'pay per class',
      title: 'Split Payments', 
      subTitle: '/ class', 
      price: '8,000', 
      description: 'Learn at your own pace, and manage your expenses monthly.' 
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