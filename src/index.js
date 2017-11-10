import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from "react-router";
import  {loadCourses} from './actions/CourseActions';
import routes from "./routes";
import configureStore from "./store/configureStore";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {loadAuthors} from "./actions/authorActions";

const store = configureStore();
store.dispatch(loadAuthors());
store.dispatch(loadCourses());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById("app"));