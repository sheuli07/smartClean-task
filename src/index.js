import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store";
import { SnackbarProvider } from "notistack";

const notificationPlacement = {
    vertical: "bottom",
    horizontal: "center",
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider anchorOrigin={notificationPlacement} maxSnack={2}>
                <Suspense fallback={<div></div>}>
                    <App />
                </Suspense>
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
