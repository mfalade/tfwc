import React from 'react';
import { scroller } from 'react-scroll';


const MetaData = (props) => {
  const scrollToReviews = () => {
    scroller.scrollTo('studentReviews', {
      duration: 1200,
      delay: 120,
      smooth: true,
      offset: -175
    });
  };

  return (
    <div className="section">
      <div className="meta-container">

        <div className="meta-container--content">
          <h5>Time</h5>
          <h3>Learn at our yown pace</h3>
          <p>Email course delivered over 2-5 weeks</p>
        </div>

        <div className="meta-container--content">
          <h5>Prerequisites</h5>
          <h3>Some background knowledge of business, up to Degree level</h3>
          <p className="empty-cell" />
        </div>

        <div className="meta-container--content">
          <h5>Student Rating</h5>
          <h3 className="empty-cell">&nbsp;</h3>
          <p className="pointer link-text bold-4" onClick={scrollToReviews}>View all reviews (4)</p>        
        </div>
        
        <div className="meta-container--content">
          <h5>Estimated Salary</h5>
          <h3>NGN150k to NGN800k</h3>
          <p className="empty-cell" />        
        </div>
      </div>
    </div>
  );
}

export default MetaData;