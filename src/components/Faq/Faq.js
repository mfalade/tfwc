import React from 'react';
import { Button } from '../FormElements';

const Faq = props => (
  <div className="section">
    <div className="faq">
      <h1 className="mtl">FAQ</h1>
      <h2 className="mtm bold-4">Why should I enroll in the Android Developer Nanodegree program?</h2>
      <p>
        If you are a Java programmer who is interested in mastering the
        Android platform and building top-rated Android apps, this is
        the program for you. In this program, you’ll learn best practices
        for mobile development, build a portfolio of Android apps, and
        publish your own app to Google Play.
    </p>
      <p className="vmm">Please see the Overview Page for more information.</p>

      <h4 className="uppercase">See More Questions</h4>

      <div className="vml text-center">
        <Button
          size="large"
          text="GET STARTED NOW"
        />
      </div>
    </div>
  </div>
);

export default Faq;