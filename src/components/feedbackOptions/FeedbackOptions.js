import React from 'react';
import PropTypes from 'prop-types';
import './feedback-module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className="feedback">
        <button
          className="feedback__button"
          type="button"
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className="feedback__button"
          type="button"
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className="feedback__button"
          type="button"
          name="bad"
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
