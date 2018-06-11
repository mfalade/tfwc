import React from 'react';

const Banner = props => (
  <div className="banner">
    <div className="banner--content-area">
      { props.children }
    </div>
    <span className="banner-triangle"></span>
  </div>
);

export default Banner;