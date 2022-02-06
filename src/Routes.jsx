import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { SignUp } from "./Pages/Signup";
import { SignIn } from "./Pages/SignIn";
import { Todolist } from "./Pages/Todolist";
import { AuthClassifier } from "./Pages/AuthClassifier";
import { JournalPage } from "./Pages/JournalPage";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthClassifier} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/journal" component={JournalPage} />

      </Switch>
    </BrowserRouter>
  );
};