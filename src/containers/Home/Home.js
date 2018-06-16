import React from 'react';
import Header from '../../components/Header/Header';
import HeroContent from '../../components/HeroContent/HeroContent';
import MetaData from '../../components/MetaData';
import CourseSteps from '../../components/CourseSteps/CourseSteps';
import CoursePricing from '../../components/CoursePricing/CoursePricing';
import WhatYouWillLearn from '../../components/WhatYouWillLearn';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';

import { CourseOptionProvider, CourseOptionContext } from '../../providers/courseOptions';

export class HomeContainer extends React.Component {
  componentDidMount() {
    const header = document.getElementById("header");
    const headerOffset = header.offsetTop + 1;
    window.onscroll = (ev) => {
      if (window.pageYOffset >= headerOffset) {
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