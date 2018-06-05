import React from 'react';
import Logo from '../../assets/images/logo.jpg';

const Header = () => {
  return (
    <div id="header" className="header">
      <h3>
        <span>The </span><img src={Logo} alt="App Logo" /><span> Weeks Course</span>
      </h3>
    </div>
  );
};

export default Header;