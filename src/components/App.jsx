import React from 'react';
import Statistic from '../components/statistic/Statistic.js';
import FeedbackOptions from '../components/feedbackOptions/FeedbackOptions.js';
import Notification from './notification/notification.js';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: true,
  };

  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <div className="blocking">
        <h1 className="feedback">Give Feedback</h1>

        <FeedbackOptions options={[]} onLeaveFeedback={this.onLeaveFeedback} />

        <h1 className="feedback">Statistics</h1>

        {this.state.visible && <Statistic newState={this.state} />}

        {this.state.visible && <Notification message="There is no feedback" />}
      </div>
    );
  }
}
