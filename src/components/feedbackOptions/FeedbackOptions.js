import React from 'react';
import PropTypes from 'prop-types';
import './feedback-module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <div className="feedbackOptions">
        <button type="button" name="good" onClick={this.props.onLeaveFeedback}>
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.props.onLeaveFeedback}>
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
