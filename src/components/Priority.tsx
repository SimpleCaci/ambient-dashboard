import React from 'react';

import './Priority.css';
import ProgressBar from './ProgressBar';

function Priority({
  progress = 80,
  color = '#7dd3fc',
  name = 'Priority Name',
}) {
  return (
    <div className="priority-card">
      <div className="priority-top">
        <div>
          <p className="priority-label">Priority</p>
          <h3 className="priority-name">{name}</h3>
        </div>

        <span className="priority-percent">{progress}%</span>
      </div>

      <ProgressBar progress={progress} color={color} />
    </div>
  );
}

export default Priority;