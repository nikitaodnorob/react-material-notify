import { useState, useRef } from 'react';
import { useNotifications, NotificationLevelType } from 'react-material-notify';
import './App.css';

/**
 * Array of all possible levels
 * @type {NotificationLevelType[]}
 */
const levels = ['info', 'success', 'warning', 'error'];

function App() {
  const { createNotification } = useNotifications();
  const [selectedLevel, selectLevel] = useState(levels[0]);
  const timeoutRef = useRef(null);

  const onCreateNotification = () => {
    const durationText = timeoutRef.current?.value;
    const duration = Number(durationText);
    if (durationText !== 'forever' && Number.isNaN(duration)) {
      alert('Invalid duration value!');
      return;
    }

    createNotification({
      duration: !Number.isNaN(duration) ? duration : 'forever',
      message: `${selectedLevel} message!`,
      level: selectedLevel,
    });
  };

  return (
    <div className="App">
      <div className="row">
        {levels.map((level) => (
          <label key={level}>
            <input type="radio"
              name="level"
              value={level}
              checked={level === selectedLevel}
              onChange={() => selectLevel(level)}
            /> {level}
          </label>
        ))}
      </div>

      <div className="row">
        <label>
          Timeout:{' '}
          <input
            type="text"
            defaultValue="5000"
            ref={timeoutRef}
            className="timeout"
            placeholder="Enter duration in ms (neg value or 'forever' for forever notification)"
          />
        </label>
      </div>

      <div className="button row" onClick={onCreateNotification}>
        Create notification
      </div>
    </div>
  );
}

export default App;
