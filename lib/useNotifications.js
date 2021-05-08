"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotifications = void 0;
const react_1 = require("react");
const context_1 = require("./context");
const types_1 = require("./types");
const useNotifications = () => {
    const context = react_1.useContext(context_1.NotificationContext);
    const timeoutIdsRef = react_1.useRef([]);
    react_1.useEffect(() => {
        const timeoutIds = timeoutIdsRef.current;
        return () => {
            timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
        };
    }, []);
    const { dispatch } = context;
    const createNotification = react_1.useCallback((notification) => {
        var _a, _b;
        const notificationId = (_a = notification.id) !== null && _a !== void 0 ? _a : Date.now();
        const notificationDuration = (_b = notification.duration) !== null && _b !== void 0 ? _b : 5000;
        dispatch({ type: types_1.ActionKind.ShowNotification, payload: Object.assign(Object.assign({}, notification), { id: notificationId }) });
        timeoutIdsRef.current.push(window.setTimeout(() => dispatch({ type: types_1.ActionKind.CloseNotification, payload: notificationId }), notificationDuration));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { createNotification };
};
exports.useNotifications = useNotifications;
