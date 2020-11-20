import {
    SHOW_NOTIFICATION,
    CLOSE_NOTIFICATION,
    REMOVE_ALL_NOTIFICATION,
} from "./actionTypes";

export const notify = (notification) => {
    const key = notification.options && notification.options.key;

    return {
        type: SHOW_NOTIFICATION,
        payload: {
            ...notification,
            key: key || new Date().getTime() + Math.random(),
        },
    };
};

export const closeNotification = (key) => ({
    type: CLOSE_NOTIFICATION,
    dismissAll: !key,
    key,
});

export const removeNotification = (key) => ({
    type: REMOVE_ALL_NOTIFICATION,
    key,
});
