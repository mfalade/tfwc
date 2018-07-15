import React from 'react';
import featureImageTwo from '../../assets/images/features-2.png';
import StarIcon from '../../assets/images/star.png';
import TemplateIcon from '../../assets/images/file.png';
import QnAIcon from '../../assets/images/discuss-issue.png';

const FeatureImage = props => {
  return (
    <div className="layered-cards">
      <div className="background">

      </div>
      <div className="foreground">
        <img src={props.imageSource} alt=""/>
      </div>
    </div>
  );
}

const Features = props => {
  return (
    <div className="features-container">
      <div className="feature-row">
        <div>
          <FeatureImage imageSource={featureImageTwo} />
        </div>
        <div>
          <div className="feature-row--text">
            <div className="feature-item">
              <img src={StarIcon} alt="section icon" />
              <div>
                <h2>Personalized Support and Coaching</h2>
                <p>
                  Receive optional personal one-on-one hour long coaching 
                  sessions after each lesson is completed. Only available on the full payment plan.
                </p>
              </div>
            </div>
            <br />
            <div className="feature-item two">
              <img src={TemplateIcon} alt="section icon" />
              <div>
                <h2>Free Templates, Documents and Materials</h2>
                <p>
                  Each section has actionable material to help you practice 
                  and build your documentation. It is yours to keep forever
                </p>
              </div>
            </div>
            <br />
            <div className="feature-item three">
              <img src={QnAIcon} alt="section icon" />
              <div>
                <h2>Learn from the Best</h2>
                <p>
                  This program is built using expert material from industry 
                  eading best practices to teach you to excel at Product & Project Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;