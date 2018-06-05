import React from 'react';


const CourseSteps = props => (
  <div className="course-steps-wrapper">
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
        <br />

        <div>
          <div className="checkbox">
            <label htmlFor="optionOne">
              <input type="checkbox" name="options" value="one" id="optionOne" />
              I'm having trouble with writing documents
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="optionTwo">
              <input type="checkbox" name="options" value="two" id="optionTwo" />
              I struggle to come up with new ideas
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="optionThree">
              <input type="checkbox" name="options" value="three" id="optionThree" />
              Where does good strategy come from?
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="optionFour">
              <input type="checkbox" name="options" value="four" id="optionFour" />
              This is all new to me, and I want to learn
            </label>
          </div>
        </div>

      </li>
      <li>
        <p>
          Great! So, it looks like we have something for you. Based on what you selected, here's how we can help
        </p>
      </li>
      <li>
        <p>
          Ready to get started? Jump in here. Or, keep reading to find out more...and you can start once you're all caught up!
        </p>
        <p>See you on the other side</p>
      </li>
    </ol>
  </div>
);

export default CourseSteps;