import React, { FC } from 'react';
import Alert from '@material-ui/lab/Alert';
import { NotificationType } from '../types';
import styles from './Notification.module.css';

export const Notification: FC<NotificationPropsType> = ({ notification }) => (
  <Alert severity={notification.level} variant="filled" className={styles.notification}>
    {notification.message}
  </Alert>
);

type NotificationPropsType = {
  notification: NotificationType;
};
