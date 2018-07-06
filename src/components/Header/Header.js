import React from 'react';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div id="header" className="header">
      <img src={Logo} alt="App Logo" />
    </div>
  );
};

export default Header;