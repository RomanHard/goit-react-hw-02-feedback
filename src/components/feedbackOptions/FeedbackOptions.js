import React from 'react';
import PropTypes from 'prop-types';
import './feedback-module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className="feedbackOptions">
        <button
          name="good"
          type="button"
          className="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          name="neutral"
          type="button"
          className="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          name="bad"
          type="button"
          className="bad"
          onClick={onLeaveFeedback}
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
