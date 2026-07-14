import { useEffect, useState } from 'react';
import './Priority.css';
import ProgressBar from './ProgressBar';

type PriorityProps = {
  storageKey: string;
  name?: string;
  color?: string;
  start?: number;
  max?: number;
  step?: number;
  unit?: string;
};

function readStoredValue(storageKey: string, fallback: number, max: number) {
  try {
    const stored = window.localStorage.getItem(`ambient-priority:${storageKey}`);
    if (stored === null) return fallback;
    const value = Number(stored);
    return Number.isFinite(value) ? Math.min(Math.max(value, 0), max) : fallback;
  } catch {
    return fallback;
  }
}

function Priority({
  storageKey,
  name = 'Priority Name',
  color = '#7dd3fc',
  start = 0,
  max = 3,
  step = 1,
  unit = '',
}: PriorityProps) {
  const [value, setValue] = useState(() => readStoredValue(storageKey, start, max));
  const percent = max > 0 ? Math.round((value / max) * 100) : 0;

  useEffect(() => {
    try {
      window.localStorage.setItem(`ambient-priority:${storageKey}`, String(value));
    } catch {
      // The dashboard remains usable when storage is unavailable.
    }
  }, [storageKey, value]);

  return (
    <div className="priority-card">
      <div className="priority-top">
        <div>
          <p className="priority-label">Priority</p>
          <h3 className="priority-name">{name}</h3>
        </div>
        <span className="priority-percent" aria-live="polite">{percent}%</span>
      </div>

      <ProgressBar progress={percent} color={color} />

      <div className="priority-bottom">
        <button type="button" onClick={() => setValue((previous) => Math.max(previous - step, 0))} disabled={value <= 0} aria-label={`Decrease ${name}`}>−</button>
        <p>{value} / {max} {unit}</p>
        <button type="button" onClick={() => setValue((previous) => Math.min(previous + step, max))} disabled={value >= max} aria-label={`Increase ${name}`}>+</button>
      </div>
    </div>
  );
}

export default Priority;
