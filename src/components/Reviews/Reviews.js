import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

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
    mockReviews: [
      { user: 'Hassan J.', comment: 'Wonderful details of every thing and go up stairs', stars: 4 },
      { user: 'Huroye S.', comment: 'excellent', stars: 5 },
      { user: 'Rick H.', comment: 'Not bad', stars: 3 },
      { user: 'Bran Q.', comment: 'Great work Karen 👍', stars: 5 },
    ]
  }

  toggleReview = () => {
    const newMockReview = this.state.mockReviews.map(review => {
      return {
        ...review,
        stars: Math.ceil(Math.random() * 5)
      }
    });
    this.setState({ mockReviews: newMockReview });
  }

  render () {
    const { mockReviews } = this.state;
    const totalNumReviews = mockReviews.reduce((acc, review) => {
      return review.stars + acc;
    }, 0);

    const averageNumReviews = Math.round(totalNumReviews/ mockReviews.length);

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
        <div>
          <h1>Student Reviews</h1>
          <div className="review-cards-holder">
            <div className="review-summary">
              <div>
                <h1 className="extra-large">{review.emoji}</h1>
                <h1>{review.description}</h1>
                <Ratings stars={averageNumReviews} type="large" />
              </div>
            </div>
            {
              mockReviews.map((review, index) => {
                return (<Fragment key={index}>
                  <ReviewCard {...review} />
                </Fragment>);
              })
            }
            <div className="fully-centered">  
                <div>
                  <p className="cta mn" onClick={this.toggleReview}>Click to toggle ratings...</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}


export default Reviews;