import React from 'react';

const CourseSteps = ({ context }) => {
  return (
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

          <div>
            <div className="checkbox">
              <label className="radio-label" htmlFor="optionOne">
                <input type="radio" name="option" onChange={context.updateSelectedOption} value="optionOne" id="optionOne" defaultChecked />
                <span className="fancy-radio" />
                I'm having trouble with writing documents
              </label>
            </div>
            <div className="checkbox">
              <label className="radio-label" htmlFor="optionTwo">
                <input type="radio" name="option" onChange={context.updateSelectedOption} value="optionTwo" id="optionTwo" />
                <span className="fancy-radio" />
                I struggle to come up with new ideas
              </label>
            </div>
            <div className="checkbox">
              <label className="radio-label" htmlFor="optionThree">
                <input type="radio" name="option" onChange={context.updateSelectedOption} value="optionThree" id="optionThree" />
                <span className="fancy-radio" />
                Where does good strategy come from?
              </label>
            </div>
            <div className="checkbox">
              <label className="radio-label" htmlFor="optionFour">
                <input type="radio" name="option" onChange={context.updateSelectedOption} value="optionFour" id="optionFour" />
                <span className="fancy-radio" />
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
  )
};

export default CourseSteps;