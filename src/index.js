import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from "react-router";
import routes from "./routes";
import configureStore from "./store/configureStore";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById("app"));