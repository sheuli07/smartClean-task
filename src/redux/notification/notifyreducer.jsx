import {
    SHOW_NOTIFICATION,
    CLOSE_NOTIFICATION,
    REMOVE_ALL_NOTIFICATION,
} from "./actionTypes";

const initialState = {
    notifications: [],
};

export const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        key: action.key,
                        ...action.payload,
                    },
                ],
            };

        case CLOSE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.map((notification) =>
                    action.dismissAll || notification.key === action.key
                        ? { ...notification, dismissed: true }
                        : { ...notification }
                ),
            };

        case REMOVE_ALL_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notification) => notification.key !== action.key
                ),
            };

        default:
            return state;
    }
};
