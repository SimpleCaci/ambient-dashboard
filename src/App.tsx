import React from 'react';
import './App.css';
// correct path to components folder
import Priority from './components/Priority';

function App() {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Clock</h2>
        <p>12:23 PM</p>
      </div>

      <div className="card">
        <h2>Weather</h2>
        <p>Sunny, 75°F</p>
      </div>

      <div className="card">
        <h2>Calendar</h2>
        <p>No events yet</p>
      </div>

      <div className="card">
        <h2>Priorities</h2>

        <Priority progress={65} color="#7dd3fc" name="Water Intake" />
        <Priority progress={100} color="#7dfc98" name="Food Intake" /> 
      </div>

      <div className="card">
        <h2>Focus</h2>
        <p>Building Ambient Dashboard atm</p>
      </div>
    </div>
  );
}

export default App;