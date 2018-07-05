import React, { Component } from 'react';
import classnames from 'classnames';
import { modules } from '../../providers/modules';
import { Button }from '../FormElements';

class WhatYouWillLearn extends Component {

  render() {
    const { courseModules } = this.props.context;

    const childClassNames = classnames({
      card: true,
      'more-details': true,
      expanded: true
    });

    const cardHeight = courseModules.length > 2  ? 'large' : 'small';

    return (
      <div className="section">
        <div className="course-sections">
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
                  <div>
                    <Button className="mtl" text="get started"/>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WhatYouWillLearn;