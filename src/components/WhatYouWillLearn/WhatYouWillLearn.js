import React from 'react';
import classnames from 'classnames';
import { scroller, Element } from 'react-scroll';
import { modules } from '../../providers/modules';
import { Button } from '../FormElements';

const WhatYouWillLearn = props => {
  const goToPayment = () => {
    scroller.scrollTo('paymentSection', {
      duration: 1200,
      delay: 120,
      smooth: true,
      offset: -120
    });
  }
  const { courseModules } = props.context;

  const childClassNames = classnames({
    card: true,
    'more-details': true,
    expanded: true
  });

  const cardHeight = courseModules.length > 2 ? 'large' : 'small';

  return (
    <div className="section">
      <div className="course-sections">
        <Element name="courseLessons" />
        <h1 className="mtl mbm">What You Will Learn</h1>

        <div className={childClassNames} data-card-height={cardHeight}>
          <div className="card-body">
            <div className="wrapper course-summary">
              <div>
                <div className="course-sections fancy-list">
                  <ul>
                    {
                      courseModules.map((moduleId, index) => {
                        const module = modules[moduleId];
                        return (
                          <React.Fragment key={index}>
                            <li>
                              <h4>{module.title}</h4>
                              <p>{module.description}</p>
                            </li>
                          </React.Fragment>
                        );
                      })
                    }
                  </ul>
                </div>
                <div className="cta-container">
                  <Button className="mtl" text="get started" onClick={goToPayment} />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;