import React from 'react';
import Statistic from '../components/statistic/Statistic.js';

export const App = () => {



  return (
    <div>
      <h1 className='feedback'>Give Feedback</h1>
      
      <button
        onClick={() => {
          console.log('Good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          console.log('Neutral');
        }}
      >
        Neutral

      </button>
      <button
        onClick={() => {
          console.log('Bad');
        }}
      >
        Bad
      </button>
        
      <h1 className='feedback'>Statistics</h1>

      <Statistic good={0} bad={0} total={0} positivePercentage={0} />
    </div>
  );
};
