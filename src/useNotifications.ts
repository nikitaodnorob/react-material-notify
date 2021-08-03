import { useCallback, useContext, useEffect, useRef } from 'react';
import { NotificationContext } from './context';
import { ActionKind, NotificationType } from './types';

export function useNotifications() {
  const context = useContext(NotificationContext)!;
  const timeoutIdsRef = useRef<number[]>([]);

  useEffect(() => {
    const timeoutIds = timeoutIdsRef.current;
    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  const { dispatch } = context;

  const createNotification = useCallback((notification: NotificationType) => {
    const notificationId = notification.id || Date.now();
    const notificationDuration = notification.duration ?? 5000;

    dispatch({
      type: ActionKind.ShowNotification,
      payload: { ...notification, id: notificationId },
    });

    if (notificationDuration !== 'forever' && notificationDuration > 0) {
      timeoutIdsRef.current.push(
        window.setTimeout(
          () => dispatch({ type: ActionKind.CloseNotification, payload: notificationId }),
          notificationDuration,
        ),
      );
    }
  }, []);

  return { createNotification };
}
