import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import Loading from "../components/Loading/index.js";
import Login from "./login/index.jsx"; 
import Details from "./details/index.jsx"; // here we got the weird cant resolve path again
// import Mine from "./mine/index.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Login/>
        <Switch>
          <Route  exact path="/"  component={Home} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
        {/* <Loading /> */}
      </React.Fragment>

    )
  }
}

export default AppRouter;
