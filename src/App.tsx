 import React from 'react';
 import ProgressBar from '../src/componets/ProgressBar.jsx';


function App() {
  return (
    <div className="dashboard">
      <div>
        Clock
        <p>12:23 PM</p>  
      </div>
      <div>
        Weather
        <p>Sunny, 75°F</p>
      </div>
      <div>
        Calendar
      </div>
      <div>
        Priorities
      </div>
      <div>
        <div>
          <p>Water Intake</p>
          <ProgressBar progress={65} color="#7dd3fc" />
          <p> 80% </p>
        </div>

        <div>
          <p>Food Intake</p>
          <ProgressBar progress={100} color="#7dfc98" />
          <p> 100% </p>
        </div>
      </div>
      <div>
        Focus
        <div>Building Ambient Dashboard atm</div>
      </div>
    </div>
  );
}

export default App;