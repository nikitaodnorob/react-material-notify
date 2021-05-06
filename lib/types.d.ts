import React from 'react';
export declare enum NotificationLevelType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
export declare type NotificationType = {
    id?: number | string;
    level: NotificationLevelType;
    title?: string | null;
    message: string;
    duration?: number;
    canClose?: boolean;
    onClose?: (notification: NotificationType) => void;
};
export declare type NotificationContextType = {
    state: NotificationType[];
    dispatch: React.Dispatch<ActionType>;
};
export declare enum ActionKind {
    ShowNotification = "SHOW_NOTIFICATION",
    CloseNotification = "CLOSE_NOTIFICATION"
}
export declare type ActionType = {
    type: ActionKind.ShowNotification;
    payload: NotificationType;
} | {
    type: ActionKind.CloseNotification;
    payload: number | string;
};
