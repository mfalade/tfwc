import React from 'react';
import { scroller, Element } from 'react-scroll';
import Banner from '../Banner';


const CourseSteps = ({ context }) => {
  const moduleGoal = context.moduleGoal;
  const ModuleSummary = context.moduleSummary;

  const handleOnChange = ev => {
    context.updateSelectedOption(ev);
    scroller.scrollTo('courseSections', {
      duration: 1500,
      delay: 200,
      smooth: true,
      offset: -140
    });
  }

  return (
    <div className="section">
      <div className="course-steps-wrapper">
        <Element name="courseSteps"></Element>
        <ol className="course-steps">
          <li>
            <p>
              The goal of this course is to help you become a better Product/Project Manager.
              It's a simple step-by-step process to get you from where you are, to where you want to be.
              So, are you interested in achieving this goal? If yes, then see you in Step 2.
            </p>
          </li>
          <li>
            <p>
              What's wrong with the way you are currently managing products/projects?
            </p>

            <div>
              <div className="checkbox">
                <label className="radio-label" htmlFor="optionOne">
                  <input type="radio" name="option" onChange={handleOnChange} value="optionOne" id="optionOne" defaultChecked />
                  <span className="fancy-radio" />
                  I'm having trouble with writing documents
                </label>
              </div>
              <div className="checkbox">
                <label className="radio-label" htmlFor="optionTwo">
                  <input type="radio" name="option" onChange={handleOnChange} value="optionTwo" id="optionTwo" />
                  <span className="fancy-radio" />
                  I struggle to come up with new ideas
                </label>
              </div>
              <div className="checkbox">
                <label className="radio-label" htmlFor="optionThree">
                  <input type="radio" name="option" onChange={handleOnChange} value="optionThree" id="optionThree" />
                  <span className="fancy-radio" />
                  Where does good strategy come from?
                </label>
              </div>
              <div className="checkbox">
                <label className="radio-label" htmlFor="optionFour">
                  <input type="radio" name="option" onChange={handleOnChange} value="optionFour" id="optionFour" />
                  <span className="fancy-radio" />
                  This is all new to me, and I want to learn
                </label>
              </div>
            </div>

          </li>
          <li>
            <Element name="courseSections"></Element>
            <p>
              Great! So, it looks like we have something for you. Based on what you selected, here's how we can help
            </p>
            <br />
            <div className="card">
            <div className="card-header">
              <Banner>
                <p>Syllabus</p>
              </Banner>
            </div>
            <div className="card-body two-halves">
              <div className="left-half-container">
                <h2>{ moduleGoal.title }</h2>
                { <ModuleSummary /> }
                <div className="card-cta">
                  <div className="left-half">
                    <h3 className="hightlight orange">{ moduleGoal.duration }</h3>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          </li>
          <li>
            <p>
              Ready to get started? Jump in here. Or, keep reading to find out more...and you can start once you're all caught up!
            </p>
            <p>See you on the other side</p>
          </li>
        </ol>
      </div>
    </div>
  )
};

export default CourseSteps;