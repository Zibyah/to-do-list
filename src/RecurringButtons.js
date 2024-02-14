import React from 'react';
import './styles.css';
import './App.css';

const RecurringButtons = ({ onRecurringButtonClick }) => {
  return (
    <div className="recurring-buttons">
        <button className="button-daily">Daily</button>
        <button className="button-weekly">Weekly</button>
        <button className="button-monthly">Monthly</button>
        <button className="button-occasional">Occasional</button> 
    </div>
  );
};

export default RecurringButtons;
