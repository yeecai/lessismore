import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import Loading from "../components/Loading/index.js";
// import Details from "./details/index.jsx";
// import Mine from "./mine/index.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Switch>
          <Route  exact path="/"  component={Home} />
        </Switch>
        {/* <Loading /> */}
      </React.Fragment>

    )
  }
}

export default AppRouter;
