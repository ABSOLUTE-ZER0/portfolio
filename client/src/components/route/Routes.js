import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

function Routes() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact to='/' component={Home}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default Routes;
