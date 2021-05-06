"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationContainer = void 0;
const react_1 = __importStar(require("react"));
const Notification_1 = require("./Notification");
const types_1 = require("./types");
const context_1 = require("./context");
require("./styles/NotificationContainer.css");
const initialState = [];
const reducer = (state, action) => {
    if (action.type === types_1.ActionKind.ShowNotification) {
        return state.concat(action.payload);
    }
    else if (action.type === types_1.ActionKind.CloseNotification) {
        return state.filter((notification) => notification.id !== action.payload);
    }
    else {
        return state;
    }
};
const NotificationContainer = ({ children }) => {
    const [state, dispatch] = react_1.useReducer(reducer, initialState);
    return (react_1.default.createElement(context_1.NotificationContext.Provider, { value: { state, dispatch } },
        react_1.default.createElement("div", { className: "react-material-notify__container" }, state.map((notification) => react_1.default.createElement(Notification_1.Notification, { notification: notification, key: notification.id }))),
        children));
};
exports.NotificationContainer = NotificationContainer;
