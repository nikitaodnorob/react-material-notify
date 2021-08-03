# react-material-notify

![NPM v0.1.2](https://badgen.net/npm/v/react-material-notify?cache=600)
![MIT license](https://badgen.net/npm/license/react-material-notify?cache=86400)
![Types](https://badgen.net/npm/types/react-material-notify?cache=600)
![172 bytes after minimized](https://badgen.net/bundlephobia/min/react-material-notify?color=green&cache=600)
![171 bytes after minimized and GZIP](https://badgen.net/bundlephobia/minzip/react-material-notify?color=green&cache=600)

This package can help you to create and display notifications in your React application

The package is tiny, 172 bytes!

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
