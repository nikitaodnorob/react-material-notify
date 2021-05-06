import {useContext, useEffect, useState} from 'react';
import {NotificationContext} from './context';
import {ActionKind, NotificationType} from './types';

export const useNotifications = () => {
    const context = useContext(NotificationContext)!;
    const [timeoutIds, setTimeoutIds] = useState<number[]>([]);

    useEffect(() => {
       return () => {
           timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
       };
    });

    const { dispatch } = context;

    const createNotification = (notification: NotificationType) => {
        const notificationId = notification.id ?? Date.now();
        const notificationDuration = notification.duration ?? 5000;

        dispatch({ type: ActionKind.ShowNotification, payload: { ...notification, id: notificationId } });

        setTimeoutIds(timeoutIds.concat(window.setTimeout(
            () => dispatch({ type: ActionKind.CloseNotification, payload: notificationId }),
            notificationDuration
        )));
    };

    return { createNotification };
}
