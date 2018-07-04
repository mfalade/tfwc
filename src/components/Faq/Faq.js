import React, { Component } from 'react';
import { Button } from '../FormElements';

class Faq extends Component {
  state = {
    showMore: false
  }

  showMoreQuestions = (ev) => {
    this.setState({ showMore: !this.state.showMore });
  }

  render() {
    const { showMore } = this.state;

    return (
      <div className="section">
        <div className="faq">
          <h1>FAQ</h1>

          <h2 className="mtm bold-4">How do I know if this course is right for me?</h2>
          <p>
            If you fit into any of the following profiles then this is for you:
        </p>
          <p className="vmm">Please see the Overview Page for more information.</p>
          <ul>
            <li>
              I am an experienced product or project manager looking to elevate my skills
              and take the next step in my career.
          </li>
            <li>
              I am a freelance consultant with software clients, and I want to expand the
              breath of my service offerings, and land more customers.
          </li>
            <li>
              I am a Junior Product & Project manager, and I want to dive right into things,
              so that I can grow quickly.
          </li>
          </ul>


          <div className={`more-questions ${showMore ? 'expanded' : 'collapsed'}`}>
            <h2 className="mtm bold-4">Do I need to apply?</h2>
            <p>
              No, you do not need to apply.
            </p>


            <h2 className="mtm bold-4">What are the prerequisites?</h2>
            <p>
              The course is composed of 5 lessons, delivered entirely over email, over a period of
              five calendar weeks after the enrollment cycle commences.
            </p>
            <p>
              Typically, each lesson will be delivered to your inbox on Tuesdays. You can then
              book appointment slots for the the following weekend, to access one-on-one coaching and feedback.
            </p>



            <h2 className="mtm bold-4">What is the course structure?</h2>
            <p>
              In order to be successful in this course, we recommend that you have a comfortable
              working knowledge of Business, and are educated to at least Degree level.
            </p>
            <p className="vmm">
              You do not require a prior knowledge of pure computing or technology
              terms specifically, although knowing these would help.
            </p>



            <h2 className="mtm bold-4">Can I start the course at any time?</h2>
            <p>
              No. Typically, we have cycles of enrollment running at different times of the year,
              when a batch of people can take the course. All cycles have the exact same content,
              but batching it allows to manage and deliver a better experience for all.
            </p>
            <p className="vmm">
              The next one starts on August 7th 2018. In the meantime, you can enroll and pay to secure
              your place ahead of time. Once the cycle starts, you will begin receiving the lessons in your inbox.
            </p>


            <h2 className="mtm bold-4">Who can I reach if I have issues with enrolling or payment?</h2>
            <p>
              You can contact us directly on +234 708 971 0781 for any enquiries.
            </p>

          </div>
          
          <br />
          <h4 className="uppercase cta" onClick={this.showMoreQuestions}>See {`${showMore ? 'Less' : 'More'}`} Questions</h4>

          <div className="vml text-center">
            <Button
              size="large"
              type="orange"
              text="GET STARTED NOW"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Faq;