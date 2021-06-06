import React, { FC } from 'react';
import Alert from '@material-ui/lab/Alert';
import { NotificationType } from '../types';

export const Notification: FC<NotificationPropsType> = ({ notification }) => (
  <Alert severity={notification.level} variant="filled" className="react-material-notify__notification">
    {notification.message}
  </Alert>
);

type NotificationPropsType = {
  notification: NotificationType;
};
