import { LOGIN_REQUEST_SUCCESS, LOGOUT } from "./actionTypes";
const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loggedIn: true,
            };
        case LOGOUT:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
