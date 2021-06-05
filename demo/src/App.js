import {useState} from 'react';
import {useNotifications} from 'react-material-notify';
import './App.css';

const levels = ['info', 'success', 'warning', 'error'];

function App() {
    const { createNotification } = useNotifications();
    const [selectedLevel, selectLevel] = useState(levels[0]);

    return (
        <div className="App">
            <div>
                {levels.map((level) => (
                    <label key={level}>
                        <input
                            type="radio"
                            name="level"
                            value={level}
                            checked={level === selectedLevel}
                            onChange={() => selectLevel(level)}
                        /> {level}
                    </label>
                ))}
            </div>

            <div
                className="button"
                onClick={() => createNotification({
                    duration: 5000,
                    message: `${selectedLevel} message!`,
                    level: selectedLevel
                })}
            >
                Create notification (will be closed after 5 sec)
            </div>
        </div>
    );
}

export default App;
