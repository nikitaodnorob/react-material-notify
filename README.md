# react-material-notify

This package can help you to create and display notifications in your React application

The package is tiny, less than 3 KB!

It's in active development stage now. Current plans can be found in Issues

## How to install?
```
npm i react-material-notify --save
```
or
```
yarn add react-material-notify
```

## How to use?
Firstly, you have to pass the top component (e.g. `App`) to `NotificationContainer`
(a hook option will be added in next versions)

And you need to call `createNotification` to show new notification

### `createNotification` signature

```ts
createNotification(notification: NotificationType)
```

### `NotificationType` fields
| Field | Type | Description | Default value |
|-------|------|-------------|-----------------------|
| `id?`      | `number` or `string`      | ID of the notification            | `Date.now()`  |
| `message`  | `string`                  | Text of the notification          |               |
| `level`    | `NotificationLevelType`   | Level (color) of the notification |               |
| `duration?`| `number` or `'forever'`   | Time of the notification showing (in ms). Use `'forever'` or value `<=0` for unlimited showing  | `5000`        |

```ts
type NotificationLevelType = 'info' | 'success' | 'warning' | 'error';
```

## Demo
[CodeSandbox](https://codesandbox.io/s/react-material-notify-demo-c1fkh)

## Do you have a bug report or improvement idea?
Please, open the issue! :)
