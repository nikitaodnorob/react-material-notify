"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionKind = exports.NotificationLevelType = void 0;
var NotificationLevelType;
(function (NotificationLevelType) {
    NotificationLevelType["INFO"] = "info";
    NotificationLevelType["SUCCESS"] = "success";
    NotificationLevelType["WARNING"] = "warning";
    NotificationLevelType["ERROR"] = "error";
})(NotificationLevelType = exports.NotificationLevelType || (exports.NotificationLevelType = {}));
var ActionKind;
(function (ActionKind) {
    ActionKind["ShowNotification"] = "SHOW_NOTIFICATION";
    ActionKind["CloseNotification"] = "CLOSE_NOTIFICATION";
})(ActionKind = exports.ActionKind || (exports.ActionKind = {}));
