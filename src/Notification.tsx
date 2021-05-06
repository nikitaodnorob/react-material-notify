import React, {FC} from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import {NotificationType} from './types';


export const Notification: FC<NotificationPropsType> = ({ notification }) => {
    return (
        <Alert>
            {notification.message}
        </Alert>
    )
};

type NotificationPropsType = {
    notification: NotificationType;
};
