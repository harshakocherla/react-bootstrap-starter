import React from "react";
import SignUp from "../components/signup";
import Login from "../components/login";
import Header from "../components/header-component";
import { Route, Switch } from "react-router";

export default function() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </React.Fragment>
  );
}
