import React from 'react';
import { scroller } from 'react-scroll';
import { Button }from '../FormElements';

const HeroContent = () => {
  const handleClick = () => {
    scroller.scrollTo('courseSteps', {
      duration: 1200,
      delay: 120,
      smooth: true,
      offset: -100
    });
  };

  return (
    <div className="hero-wrapper section">
      <div className="hero-content">
        <h5>THE 5-WEEKS COURSE</h5>
        <h1>Become a Product Strategy Expert</h1>
        <p>Elevate your career as a Product or Project Manager. Learn industry standard best practices for writing great scope documents, and secure more clients.</p>
        <br />
        <br />
        <Button type="white-border" text="find out how" onClick={handleClick} />
      </div>
    </div>
  );
};

export default HeroContent;