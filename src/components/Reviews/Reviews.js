import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Element } from 'react-scroll';

const Ratings = props => {
  const numChecked = props.stars;

  return (
    <div>
      {
        Array.from({ length: 5 }).map((item, i) => {
          const className = classnames({
            'fa fa-star': true,
            checked: i < numChecked,
            large: props.type === 'large'
          });
          return <span key={i} className={className}></span>
        })
      }
    </div>
  )
};

const ReviewCard = props => (
  <div className="review-card">
    <h2 className="mbxs">{props.user}</h2>
    <Ratings stars={props.stars} />
    <p className="mtm">{props.comment}</p>
  </div>
);

class Reviews extends Component {
  state = {
    studentReviews: [
      { user: 'Ngozi O.', comment: `Very well detailed. Loved the materials that I got, because I am still using them for all my clients.`, stars: 5 },
      { user: 'Chijioke N.', comment: `I had a great experience with Karen, especially during the coaching sessions. She makes things so easy for every level, so it's useful for anyone in the PM fields.`, stars: 5 },
      { user: 'Muhammad M.', comment: 'The course material is of a great quality! Really wish this was video courses, because would love to rewatch them again.', stars: 4 },
      { user: 'Eghosa N.', comment: `Great job, Karen! Learnt a lot more than I actually thought I would, and it was fantastic value for money. Would definitely recommend.`, stars: 5 },
    ]
  }

  toggleReview = () => {
    const newMockReview = this.state.studentReviews.map(review => {
      return {
        ...review,
        stars: Math.ceil(Math.random() * 5)
      }
    });
    this.setState({ studentReviews: newMockReview });
  }

  render () {
    const { studentReviews } = this.state;
    const totalNumReviews = studentReviews.reduce((acc, review) => {
      return review.stars + acc;
    }, 0);

    const averageNumReviews = Math.round(totalNumReviews/ studentReviews.length);

    const ratingMapping = {
      1: { description: 'Horrible', emoji: '💩' },
      2: { description: 'Poor', emoji: '😞' },
      3: { description: 'Good', emoji: '👍' },
      4: { description: 'Great', emoji: '🙂' },
      5: { description: 'Excellent', emoji: '😁' }
    };
    const review = ratingMapping[averageNumReviews];
  
    return (
      <div className="reviews-container gray-bg">
        <Element name="studentReviews" />
        <div>
          <div className="review-title-holder">
            <h1>Student Reviews</h1>
          </div>
          <div className="review-cards-holder">
            <div className="review-summary">
              <div>
                <h1 className="extra-large">{review.emoji}</h1>
                <h1>{review.description}</h1>
                <Ratings stars={averageNumReviews} type="large" />
              </div>
            </div>
            {
              studentReviews.map((review, index) => {
                return (<Fragment key={index}>
                  <ReviewCard {...review} />
                </Fragment>);
              })
            }
          </div>
        </div>
      </div>
    );
  };
}


export default Reviews;