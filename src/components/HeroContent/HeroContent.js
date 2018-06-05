import React from 'react';
import { Button }from '../FormElements';

const HeroContent = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <h5>THE 5-WEEK COURSE</h5>
        <h1>Become a Product Strategy Expert</h1>
        <p>Elevate your career as a Product or Project Manager. Learn industry standard best practices for writing great scope documents, and secure more clients.</p>
        <br />
        <br />
        <Button text="find out how"></Button>
      </div>
    </div>
  );
};

export default HeroContent;