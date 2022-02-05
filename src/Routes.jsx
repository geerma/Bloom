import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { Todolist } from "./Pages/Todolist";
import { AuthClassifier } from "./Pages/AuthClassifier";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthClassifier} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/signin" component={SignIn} />

      </Switch>
    </BrowserRouter>
  );
};