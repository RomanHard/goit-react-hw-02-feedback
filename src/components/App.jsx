import React from 'react';
import Statistic from '../components/statistic/Statistic.js';
import FeedbackOptions from '../components/feedbackOptions/FeedbackOptions.js';

export const App = () => {



  return (
    <div>
      <h1 className='feedback'>Give Feedback</h1>
      
      <FeedbackOptions options={[]} onLeaveFeedback={null} />

      <h1 className='feedback'>Statistics</h1>

      <Statistic good={0} bad={0} total={0} positivePercentage={0} />
    </div>
  );
};
