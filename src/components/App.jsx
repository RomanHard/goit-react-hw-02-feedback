import React from 'react';
import Statistic from '../components/statistic/Statistic.js';
import FeedbackOptions from '../components/feedbackOptions/FeedbackOptions.js';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1 className="feedback">Give Feedback</h1>

        <FeedbackOptions options={[]} onLeaveFeedback={this.onLeaveFeedback} />

        <h1 className="feedback">Statistics</h1>

        <Statistic newState={this.state} />
      </div>
    );
  }
}
