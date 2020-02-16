import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
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

        {/* <div>ok header done, doing home, </div> */}
      </React.Fragment>

    )
  }
}

export default AppRouter;
