import React from 'react';
import './App.css';
import './styles.css';



const Progressbar = ({ percentage }) => {
  // Ensure percentage is a number
  const formattedPercentage = parseFloat(percentage).toFixed(2);

  return (
    <div className="progressbar-container">
      <progress value={percentage} max="100"></progress>
      <p>{`${formattedPercentage}% complete`}</p>
    </div>
  );
};

export default Progressbar;
