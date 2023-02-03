import React from 'react';
import './statistic-module.css';
import PropTypes from 'prop-types';

class Statistic extends React.Component {
  countTotalFeedback() {
    const { good, neutral, bad } = this.props.newState;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.props.newState;
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  render() {
    const { good, neutral, bad } = this.props.newState;
    return (
      <div className="statistics">
        <p className="status">Good: {good}</p>
        <p className="status">Neutral: {neutral}</p>
        <p className="status">Bad: {bad}</p>
        <p className="status">Total: {this.countTotalFeedback()}</p>
        <p className="status">
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}

Statistic.propTypes = {
  newState: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistic;
