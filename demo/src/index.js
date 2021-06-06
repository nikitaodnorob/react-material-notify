import React from 'react';
import ReactDOM from 'react-dom';
import {NotificationContainer} from 'react-material-notify';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <NotificationContainer>
            <App/>
        </NotificationContainer>
    </React.StrictMode>,
    document.getElementById('root')
);
