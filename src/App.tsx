import { useEffect, useState } from 'react';
import './App.css';
import Priority from './components/Priority';

function App() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

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
    <main className="dashboard">
      <div className="retro-filter">
        <section className="card" aria-labelledby="clock-title">
          <h2 id="clock-title">Clock</h2>
          <p aria-live="off">{time}</p>
          <p className="card-detail">{date}</p>
        </section>

        <section className="card" aria-labelledby="weather-title">
          <h2 id="weather-title">Weather</h2>
          <p>Not connected</p>
          <p className="card-detail">Local weather setup is on the roadmap.</p>
        </section>

        <section className="card" aria-labelledby="calendar-title">
          <h2 id="calendar-title">Calendar</h2>
          <p>{date}</p>
          <p className="card-detail">No events connected.</p>
        </section>

        <section className="card" aria-labelledby="priorities-title">
          <h2 id="priorities-title">Priorities</h2>
          <Priority storageKey="water" name="Water Intake" color="#7dd3fc" start={2} max={3} step={1} unit="glasses" />
          <Priority storageKey="food" name="Food Intake" color="#7dfc98" start={1} max={3} step={1} unit="servings" />
          <Priority storageKey="exercise" name="Exercise" color="#fc7d7d" start={0} max={5} step={1} unit="sessions" />
        </section>

        <section className="card" aria-labelledby="focus-title">
          <h2 id="focus-title">Focus</h2>
          <p>Choose one small win.</p>
          <p className="card-detail">Progress stays on this device.</p>
        </section>
      </div>
    </main>
  );
}

export default App;
