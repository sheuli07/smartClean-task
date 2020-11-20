import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/login/login";
import Home from "./component/home/home";
import PrivateRoute from "./utlis/privateroutes";
import Notifier from "./utlis/notifier";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Home}></PrivateRoute>
                <Route path="*" component={() => <div>Page not found</div>} />
            </Switch>
            <Notifier />
        </Router>
    );
}

export default App;
