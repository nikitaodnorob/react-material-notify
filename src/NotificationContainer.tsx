import React, {FC, useReducer} from 'react';
import {Notification} from './Notification';
import {ActionKind, ActionType, NotificationType} from './types';
import {NotificationContext} from './context';

import './styles/NotificationContainer.css';

const initialState: NotificationType[] = [];

const reducer = (state: NotificationType[], action: ActionType) => {
    if (action.type === ActionKind.ShowNotification) {
        return state.concat(action.payload);
    } else if (action.type === ActionKind.CloseNotification) {
        return state.filter((notification) => notification.id !== action.payload);
    } else {
        return state;
    }
}

export const NotificationContainer: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NotificationContext.Provider value={{ state, dispatch }}>
            {children}
            <div className="react-material-notify__container">
                {state.map((notification) => <Notification notification={notification} />)}
            </div>
        </NotificationContext.Provider>
    )
}
