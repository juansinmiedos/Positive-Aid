import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home'
import Profile from './components/profile/Profile';
import Signup from './components/signup/Signup';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/crear-cuenta" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Router;