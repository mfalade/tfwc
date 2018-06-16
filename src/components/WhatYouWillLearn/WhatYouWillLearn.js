import React, { Component } from 'react';
import classnames from 'classnames';
import Banner from '../Banner';
import { modules } from './modules';

class WhatYouWillLearn extends Component {
  state = {
    showMoreDetails: true,
    courseModules: []
  }

  componentDidMount() {
    this.setModulesForSelectedOption('optionOne');
  }

  setModulesForSelectedOption = (selectedOption) => {
    const modulesMapping = {
      optionOne: ['lessonOne', 'lessonTwo', 'lessonThree', 'lessonFour', 'lessonFive'],
      optionTwo: ['lessonThree', 'lessonFour'],
      optionThree: ['lessonTwo', 'lessonThree'],
      optionFour: ['lessonOne', 'lessonTwo', 'lessonThree', 'lessonFour', 'lessonFive'],
    };

    this.setState({
      courseModules: modulesMapping[selectedOption]
    });
  }

  componentDidUpdate(prevProps) {
    const { context: { selectedOption } } = this.props;
    if (prevProps.context.selectedOption !== selectedOption) {
      this.setModulesForSelectedOption(selectedOption);
    }
  }

  toggleMoreDetails = () => {
    this.setState({
      showMoreDetails: !this.state.showMoreDetails
    });
  }

  render() {
    const { showMoreDetails } = this.state;
    const parentClassNames = classnames({
      card: true,
      expanded: showMoreDetails,
      collapsed: !showMoreDetails
    });

    const childClassNames = classnames({
      card: true,
      'more-details': true,
      expanded: showMoreDetails,
      collapsed: !showMoreDetails
    });

    return (
      <div className="course-sections">
        <h1 className="mtl mbm">What You Will Learn</h1>

        <div className={parentClassNames}>
          <div className="card-header">
            <Banner>
              <p>Syllabus</p>
            </Banner>
          </div>
          <div className="card-body two-halves">
            <div className="left-half-container">
              <h2>Android Developer</h2>
              <p>
                We built this Nanodegree program in partnership with Google for students with
                intermediate programming skills who want to become professional Android
                developers. By the end of this program, you’ll have a diverse portfolio of projects to
                show employers, including your own app on Google Play.
                      </p>
              <div className="card-cta">
                <div className="left-half">
                  <p onClick={this.toggleMoreDetails}>{`SEE ${showMoreDetails ? 'LESS' : 'MORE'} DETAILS`}</p>
                </div>
                <p>5 Weeks to complete</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className={childClassNames}>
          <div className="card-body">
            <div className="wrapper course-summary">
              <div>
                <h4 className="uppercase bold-5">Prerequisite Knowledge</h4>

                <p>
                  You should have 1-2 years of experience programming in Java or another object-oriented
                  language like Python or C++, and must be proficient using Git and GitHub.
                          </p>

                <div className="course-sections">
                  <ul>
                    {
                      this.state.courseModules.map((moduleId, index) => {
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
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
};

export default WhatYouWillLearn;