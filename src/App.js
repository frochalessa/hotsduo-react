import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashBoardPage from "./components/pages/DashboardPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <PublicRoute
      location={location}
      path="/login"
      exact
      component={LoginPage}
    />
    <PrivateRoute
      location={location}
      path="/dashboard"
      exact
      component={DashBoardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
