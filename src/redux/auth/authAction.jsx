import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,
    LOGOUT,
} from "./actionTypes";
import { authService } from "../../services/authService";
import { notify } from "../notification/notifyaction";

// Login action creator

const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

const loginSuccess = (data) => ({
    type: LOGIN_REQUEST_SUCCESS,
    payload: data,
});

const loginFailed = (err) => ({
    type: LOGIN_REQUEST_FAILED,
    payload: err,
});

export const login = (credential) => {
    return (dispatch) => {
        dispatch(loginRequest());

        authService
            .login(credential)
            .then((res) => {
                console.log(res);
                dispatch(loginSuccess(res));
                dispatch(
                    notify({
                        message: res.message,
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: "success",
                        },
                    })
                );
            })
            .catch((err) => {
                console.log(err);
                dispatch(loginFailed(err));
                dispatch(
                    notify({
                        message: (err && err.message) || "Something went wrong",
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: "error",
                        },
                    })
                );
            });
    };
};

// Logout action

export const logout = () => ({
    type: LOGOUT,
});
