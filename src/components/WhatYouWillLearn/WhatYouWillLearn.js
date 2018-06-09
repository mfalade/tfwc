import React, { Component } from 'react';
import classnames from 'classnames';

class WhatYouWillLearn extends Component {
  state = {
    showMoreDetails: false
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
      <div className="what-you-will-learn">
        <h1 className="mtl mbm">What You Will Learn</h1>
  
        <div className={parentClassNames}>
          <div className="card-header">
            <p className="banner">Syllabus</p>
          </div>
          <div className="card-body two-halves">
            <div className="left-half-container">
              <h2 className="vms">Android Developer</h2>
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
            <div className="wrapper">
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
              <p>You should have 1-2 years of experience programming in Java or another 
                object-oriented language like Python or C++, and must be proficient using 
                Git and GitHub. See detailed requirements. 
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
};

export default WhatYouWillLearn;