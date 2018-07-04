import React from 'react';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';
import Features from '../../components/Features';
import MetaData from '../../components/MetaData';
import Header from '../../components/Header/Header';
import WhatYouWillLearn from '../../components/WhatYouWillLearn';
import HeroContent from '../../components/HeroContent/HeroContent';
import CourseSteps from '../../components/CourseSteps/CourseSteps';
import CoursePricing from '../../components/CoursePricing/CoursePricing';

import { CourseOptionProvider, CourseOptionContext } from '../../providers/courseOptions';
import { Organizers } from '../../components/Organizers/Organizers';
import Reviews from '../../components/Reviews';

export class HomeContainer extends React.Component {
  componentDidMount() {
    const header = document.getElementById("header");

    window.onscroll = (ev) => {
      if (window.pageYOffset >= 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <CourseOptionProvider value="optionOne">
        <CourseOptionContext.Consumer>
          {context => {
            return (
              <div>
                <Header />
                <div className="container">
                  <HeroContent />
                  <MetaData />
                  <CourseSteps context={context} />
                  <CoursePricing />
                  <WhatYouWillLearn context={context} />
                  <Features />
                  <Organizers />
                  <Reviews />
                  <Faq />
                  <Footer />
                </div>
              </div>
            )
          }}
        </CourseOptionContext.Consumer>
      </CourseOptionProvider>
    );
  }
}