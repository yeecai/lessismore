import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/Header/index.jsx";
// import Home from "./home/index.jsx";
// import Details from "./details/index.jsx";
// import Mine from "./mine/index.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
               {/* <div>ok lets finish the less file</div> */}
      </React.Fragment>

    )
  }
}

export default AppRouter;
   {/* <Route exact path="/mine" component={Mine} />
      <Route exact path="/details/:id" component={Details} />
    
    <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    
    
    */}