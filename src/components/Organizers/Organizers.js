import React from 'react';
import karen from '../../assets/images/karen.jpg';

export const Organizers = props => (
  <div className="organizer-container">
    <h1>Program Organizer</h1>
    <div className="organizer-card">
      <div className="image-holder">
        <img src={karen} alt="A cute headshot of the program organizer"/>
      </div>

      <div className="profile-holder">
        <h3 className="bold-5">Karen Adie</h3>
        <p>
          Karen is a technology professional with an entrepreneurial mind-set, 
          who is obsessed with building and managing products (& people) that can do the extraordinary.
        </p>
        <p> 
          With a degree in Computer Science, she has worked in the technology teams of industry leading 
          companies, like Goldman Sachs and The Tata Group.
        </p>
        <p> 
          She also has a MSc Management degree from 
          Cranfield University, and has held several roles across project and product management in various 
          indigenous African start-ups.
        </p>
      </div>
    </div>
  </div>
);