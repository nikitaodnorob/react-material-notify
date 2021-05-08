import React, {FC} from 'react';
import Alert from '@material-ui/lab/Alert';
import {NotificationType} from './types';

export const Notification: FC<NotificationPropsType> = ({ notification }) => {
    return (
        <Alert severity={notification.level} variant="filled">
            {notification.message}
        </Alert>
    )
};

type NotificationPropsType = {
    notification: NotificationType;
};
