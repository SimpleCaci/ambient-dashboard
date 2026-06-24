import React from 'react';
import './ProgressBar.css';

function ProgressBar({
  progress = 0,
  color = '#7dd3fc',
}) {
  const safeProgress = Math.max(
    0,
    Math.min(Number(progress) || 0, 100)
  );

  return (
    <div className="pixel-progress">
      <div className="pixel-progress-inner">
        <div
          className="pixel-progress-fill"
          style={{
            width: `${safeProgress}%`,
            '--accent': color,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;