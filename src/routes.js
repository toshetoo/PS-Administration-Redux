import React from "react";
import { IndexRoute, Route } from "react-router";
import App from "./components/App";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="courses" component={Courses}/>
    </Route>
);