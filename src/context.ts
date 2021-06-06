import React from 'react';
import {ActionKind, ActionType, NotificationContextType, NotificationType} from './types';

export const NotificationContext = React.createContext<NotificationContextType | null>(null);

export const initialState: NotificationType[] = [];

export const reducer = (state: NotificationType[], action: ActionType) => {
    if (action.type === ActionKind.ShowNotification) {
        return state.concat(action.payload);
    } else if (action.type === ActionKind.CloseNotification) {
        return state.filter((notification) => notification.id !== action.payload);
    } else {
        return state;
    }
}

