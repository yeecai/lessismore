import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./containers/AppRouter.jsx";
import { AUTH_USER, UNAUTH_USER } from "./actions/types";

const store = configureStore();
import "./styles/index.less";

// localStorage.setItem("token", "cus easy mock is done!!so fake a tempo one")
// const token = localStorage.getItem("token"); // token!!
// if ( token ) {
//   store.dispatch({ type: AUTH_USER });
//     // store.dispatch({ type: UNAUTH_USER });
// }

render(
  <HashRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>""
  </HashRouter>,
  document.getElementById("app")
);


