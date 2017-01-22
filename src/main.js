import React from "react";
import { render } from "react-dom";


// CSS
import "./stylesheets/test.css";

// components
import App from "./components/App.js";
import Layout from "./components/Layout.js"

// Router Dependencies 
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

// store
import { store, history } from "./store.js"


const router = (

    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Layout}></IndexRoute>
        </Route>
      </Router> 
    </Provider>
)

render(router, document.getElementById("app"));
