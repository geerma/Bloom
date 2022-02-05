import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Todolist } from "./Pages/Todolist";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/todolist" component={Todolist} />
      </Switch>
    </BrowserRouter>
  );
};