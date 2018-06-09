import React from 'react';

import PricingCard from '../PricingCard';
import { Button } from '../FormElements';

const CoursePricing = props => {
  return (
    <div className="course-pricing">
      <h1>Get Started Now</h1>

      <div className="course-pricing-wrapper">
        <PricingCard />
        <PricingCard />
        <PricingCard />
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