import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { homeReducer } from "./home/homeReducer";
import { notifyReducer } from "./notification/notifyreducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer,
    notify: notifyReducer,
});
