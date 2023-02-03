import React from 'react';
import './statistic-module.css';
import PropTypes from 'prop-types';

class Statistic extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="statistics">
        <p className="status">Good: {this.state.good}</p>
        <p className="status">Neutral: {this.state.neutral}</p>
        <p className="status">Bad: {this.state.bad}</p>
        <p className="status">Total: {this.countTotalFeedback()}</p>
        <p className="status">
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </p>

        {/* <button
          type="button"
          name="good"
          onClick={() => this.setState({ good: this.state.good + 1 })}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={() => this.setState({ neutral: this.state.neutral + 1 })}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          onClick={() => this.setState({ bad: this.state.bad + 1 })}
        >
          Bad
        </button> */}
      </div>
    );
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistic;
