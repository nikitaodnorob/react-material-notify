import React from 'react';

export type NotificationLevelType = 'info' | 'success' | 'warning' | 'error';

export type NotificationType = {
    id?: number | string;
    level: NotificationLevelType;
    title?: string | null;
    message: string;
    duration?: number;
    canClose?: boolean;

    onClose?: (notification: NotificationType) => void;
}

export type NotificationContextType = {
    state: NotificationType[];
    dispatch: React.Dispatch<ActionType>;
}

export enum ActionKind {
    ShowNotification = 'SHOW_NOTIFICATION',
    CloseNotification = 'CLOSE_NOTIFICATION',
}

export type ActionType =
    { type: ActionKind.ShowNotification, payload: NotificationType } |
    { type: ActionKind.CloseNotification, payload: number | string };
