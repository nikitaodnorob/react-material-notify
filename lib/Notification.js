"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const react_1 = __importDefault(require("react"));
const Alert_1 = __importDefault(require("@material-ui/lab/Alert"));
const Notification = ({ notification }) => {
    return (react_1.default.createElement(Alert_1.default, { severity: notification.level, variant: "filled" }, notification.message));
};
exports.Notification = Notification;
