import React, { useState } from 'react';
import './Priority.css';
import ProgressBar from './ProgressBar';

type PriorityProps = {
  name?: string;
  color?: string;
  start?: number;
  max?: number;
  step?: number;
  unit?: string;
};

function Priority({
  name = 'Priority Name',
  color = '#7dd3fc',
  start = 0,
  max = 3,
  step = 1,
  unit = '',
}: PriorityProps) {
  const [value, setValue] = useState(start);

  const percent = Math.round((value / max) * 100);

  function increase() {
    setValue((prev) => Math.min(prev + step, max));
  }

  function decrease() {
    setValue((prev) => Math.max(prev - step, 0));
  }

  return (
    <div className="priority-card">
      <div className="priority-top">
        <div>
          <p className="priority-label">Priority</p>
          <h3 className="priority-name">{name}</h3>
        </div>

        <span className="priority-percent">{percent}%</span>
      </div>

      <ProgressBar progress={percent} color={color} />

      <div className="priority-bottom">
        <button onClick={decrease}>-</button>

        <p>
          {value} / {max} {unit}
        </p>

        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default Priority;