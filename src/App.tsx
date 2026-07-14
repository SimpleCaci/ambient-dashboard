import { useEffect, useState } from 'react';
import './App.css';
import FocusTimer from './components/FocusTimer';
import Priority from './components/Priority';

type Theme = 'violet' | 'forest';

function readTheme(): Theme {
  try {
    return window.localStorage.getItem('ambient-theme') === 'forest'
      ? 'forest'
      : 'violet';
  } catch {
    return 'violet';
  }
}

function App() {
  const [now, setNow] = useState(() => new Date());
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('ambient-theme', theme);
    } catch {
      // Theme selection remains usable without persistence.
    }
  }, [theme]);

  const time = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(now);
  const date = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }).format(now);

  return (
    <main className={`dashboard theme-${theme}`}>
      <div className="dashboard-shell">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Ambient desktop</p>
            <h1>Make space for one good day.</h1>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => current === 'violet' ? 'forest' : 'violet')}
          >
            Palette · {theme === 'violet' ? 'Night bloom' : 'Forest signal'}
          </button>
        </header>

        <div className="dashboard-grid">
          <section className="card clock-card" aria-labelledby="clock-title">
            <p className="eyebrow">Right now</p>
            <h2 id="clock-title" className="sr-only">Clock</h2>
            <p className="clock-value" aria-live="off">{time}</p>
            <p className="card-detail">{date}</p>
          </section>

          <div className="focus-feature">
            <FocusTimer />
          </div>

          <section className="card priorities-card" aria-labelledby="priorities-title">
            <div className="card-heading">
              <div>
                <p className="eyebrow">Daily rhythm</p>
                <h2 id="priorities-title">Priorities</h2>
              </div>
              <span>Saved locally</span>
            </div>
            <Priority storageKey="water" name="Water Intake" color="#7dd3fc" start={2} max={8} step={1} unit="glasses" />
            <Priority storageKey="food" name="Meals" color="#86efac" start={1} max={3} step={1} unit="servings" />
            <Priority storageKey="exercise" name="Movement" color="#fda4af" start={0} max={3} step={1} unit="sessions" />
          </section>

          <section className="card quiet-card" aria-labelledby="weather-title">
            <p className="eyebrow">Weather</p>
            <h2 id="weather-title">Ready when you are</h2>
            <p className="card-detail">No account or location is connected. A privacy-friendly local forecast can be added later.</p>
          </section>

          <section className="card quiet-card" aria-labelledby="calendar-title">
            <p className="eyebrow">Calendar</p>
            <h2 id="calendar-title">{date}</h2>
            <p className="card-detail">A calm empty state until you choose a calendar source.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
