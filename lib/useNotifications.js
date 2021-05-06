"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotifications = void 0;
const react_1 = require("react");
const context_1 = require("./context");
const types_1 = require("./types");
const useNotifications = () => {
    const context = react_1.useContext(context_1.NotificationContext);
    const [timeoutIds, setTimeoutIds] = react_1.useState([]);
    react_1.useEffect(() => {
        return () => {
            timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
        };
    });
    const { dispatch } = context;
    const createNotification = (notification) => {
        var _a, _b;
        const notificationId = (_a = notification.id) !== null && _a !== void 0 ? _a : Date.now();
        const notificationDuration = (_b = notification.duration) !== null && _b !== void 0 ? _b : 5000;
        dispatch({ type: types_1.ActionKind.ShowNotification, payload: Object.assign(Object.assign({}, notification), { id: notificationId }) });
        setTimeoutIds(timeoutIds.concat(window.setTimeout(() => dispatch({ type: types_1.ActionKind.CloseNotification, payload: notificationId }), notificationDuration)));
    };
    return { createNotification };
};
exports.useNotifications = useNotifications;
