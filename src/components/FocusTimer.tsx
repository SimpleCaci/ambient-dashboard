import { useEffect, useState } from 'react';
import './FocusTimer.css';

type TimerMode = 'focus' | 'break';

const DURATIONS: Record<TimerMode, number> = {
  focus: 25 * 60,
  break: 5 * 60,
};

const STORAGE_KEY = 'ambient-focus:sessions';

function readSessions(): string[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(parsed)
      ? parsed.filter((value): value is string => typeof value === 'string')
      : [];
  } catch {
    return [];
  }
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

function FocusTimer() {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [remaining, setRemaining] = useState(DURATIONS.focus);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(readSessions);
  const duration = DURATIONS[mode];

  useEffect(() => {
    if (!running) return;

    const timer = window.setInterval(() => {
      setRemaining((previous) => {
        if (previous > 1) return previous - 1;

        setRunning(false);
        if (mode === 'focus') {
          setSessions((current) => {
            const next = [...current, new Date().toISOString()].slice(-20);
            try {
              window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            } catch {
              // Completion history is optional when storage is unavailable.
            }
            return next;
          });
        }
        return duration;
      });
    }, 1_000);

    return () => window.clearInterval(timer);
  }, [duration, mode, running]);

  const chooseMode = (nextMode: TimerMode) => {
    setMode(nextMode);
    setRemaining(DURATIONS[nextMode]);
    setRunning(false);
  };

  const progress = Math.round(((duration - remaining) / duration) * 100);
  const today = new Date().toDateString();
  const completedToday = sessions.filter(
    (session) => new Date(session).toDateString() === today,
  ).length;

  return (
    <section className="focus-timer" aria-labelledby="focus-timer-title">
      <div className="focus-heading">
        <div>
          <p className="eyebrow">Quiet momentum</p>
          <h2 id="focus-timer-title">Focus room</h2>
        </div>
        <span className="session-count">{completedToday} today</span>
      </div>

      <div className="mode-switch" aria-label="Timer mode">
        <button
          type="button"
          className={mode === 'focus' ? 'active' : ''}
          onClick={() => chooseMode('focus')}
          aria-pressed={mode === 'focus'}
        >
          25 min focus
        </button>
        <button
          type="button"
          className={mode === 'break' ? 'active' : ''}
          onClick={() => chooseMode('break')}
          aria-pressed={mode === 'break'}
        >
          5 min reset
        </button>
      </div>

      <p className="timer-value" aria-live="polite">{formatTime(remaining)}</p>
      <div
        className="timer-track"
        role="progressbar"
        aria-label={`${mode} timer progress`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="timer-actions">
        <button type="button" className="primary-action" onClick={() => setRunning((value) => !value)}>
          {running ? 'Pause' : remaining === duration ? 'Begin' : 'Continue'}
        </button>
        <button type="button" onClick={() => {
          setRunning(false);
          setRemaining(duration);
        }}>
          Reset
        </button>
      </div>

      <div className="session-history">
        <p>Recent focus sessions</p>
        {sessions.length === 0 ? (
          <span>Your completed sessions will stay on this device.</span>
        ) : (
          <ul>
            {sessions.slice(-3).reverse().map((session) => (
              <li key={session}>
                {new Intl.DateTimeFormat(undefined, {
                  weekday: 'short',
                  hour: 'numeric',
                  minute: '2-digit',
                }).format(new Date(session))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default FocusTimer;
