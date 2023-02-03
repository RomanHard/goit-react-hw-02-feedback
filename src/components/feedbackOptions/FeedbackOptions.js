import React from 'react';
import PropTypes from 'prop-types';
import './feedback-module.css';

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <div className="feedbackOptions">
        <button
          type="button"
          className="good"
          onClick={this.props.onLeaveFeedback}
        >
          Good
        </button>
        <button
          type="button"
          className="neutral"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          type="button"
          className="bad"
          onClick={this.props.onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
