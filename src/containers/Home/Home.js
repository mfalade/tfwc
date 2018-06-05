import React from 'react';
import Header from '../../components/Header/Header';
import HeroContent from '../../components/HeroContent/HeroContent';

export class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HeroContent />
      </div>
    )
  }
}