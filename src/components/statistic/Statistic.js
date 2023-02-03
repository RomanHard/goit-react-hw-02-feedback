import React from 'react';
import './statistic-module.css';

class Statistic extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Good() {
  //   console.log('Good');
  // }

  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
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

export default Statistic;
