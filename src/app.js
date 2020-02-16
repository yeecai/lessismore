import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./containers/AppRouter.jsx";
const store = configureStore();

render(
  <HashRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);