import React, {FC, useReducer} from 'react';
import {Notification} from './Notification';
import {initialState, NotificationContext, reducer} from './context';

import './styles/NotificationContainer.css';

export const NotificationContainer: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NotificationContext.Provider value={{ state, dispatch }}>
            <div className="react-material-notify__container">
                {state.map((notification) => <Notification notification={notification} key={notification.id} />)}
            </div>
            {children}
        </NotificationContext.Provider>
    )
}
