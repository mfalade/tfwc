import React, { Component } from 'react';
import classnames from 'classnames';
import Banner from '../Banner';

class WhatYouWillLearn extends Component {
  state = {
    showMoreDetails: true
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
                    <li>
                      <h4>Welcome to Your Nanodegree program</h4>
                      <p>
                        Welcome! Here’s an overview of the program, along with some
                        helpful resources to get you started.
                      </p>
                    </li>

                    <li>
                      <h4>Developing Android Apps</h4>
                      <p>
                        Work with instructors step-by-step to build a cloud-connected Android app.
                        Blending theory and practice, learn how to build great apps the right way.
                      </p>
                    </li>
                    
                    <li>
                      <h4>Gradle for Android and Java</h4>
                      <p>
                        Learn how to customize your Gradle build, and explore advanced topics like: 
                        app testing, configuring free vs. paid apps, and creating and integrating libraries.
                      </p>
                    </li>
                    
                    <li>
                      <h4>Material Design for Android Developers</h4>
                      <p>
                        Apply the design principles that define Android's visual language to your apps, 
                        using material design elements, transitions and graphics, across multiple form factors.
                      </p>
                    </li>
                    
                    <li>
                      <h4>Capstone Project</h4>
                      <p>
                        Integrate all you've learned in this program to bring your own app idea to life, 
                        and publish your app to Google Play.
                      </p>
                    </li>

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