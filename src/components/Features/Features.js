import React from 'react';
import featureImageOne from '../../assets/images/features-1.png';
import featureImageTwo from '../../assets/images/features-2.png';

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
          <FeatureImage imageSource={featureImageOne} />
        </div>
        <div>
          <div>
            <h2>Code Review on All Your Projects</h2>
            <p>
              Receive personal, in-line code review from our network of expert reviewers for each of 
              your projects, ensuring that you get the actionable feedback you need to make real progress.
            </p>
          </div>
          <br />
          <br />
          <div>
            <h2>Personalized Support and Mentorship</h2>
            <p>
              Learn with the support of mentors from the very beginning of the program, 
              and join a rich community of learners on a dedicated forum.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-row">
        <div>
          <div>
            <h2>Code Review on All Your Projects</h2>
            <p>
              Receive personal, in-line code review from our network of expert reviewers for each of 
              your projects, ensuring that you get the actionable feedback you need to make real progress.
            </p>
          </div>
          <br />
          <br />
          <div>
            <h2>Personalized Support and Mentorship</h2>
            <p>
              Learn with the support of mentors from the very beginning of the program, 
              and join a rich community of learners on a dedicated forum.
            </p>
          </div>
        </div>
        <div>
          <FeatureImage imageSource={featureImageTwo} />
        </div>
      </div>
    </div>
  );
};

export default Features;