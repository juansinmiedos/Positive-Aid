import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home'
import Profile from './components/profile/Profile';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Confirmation from './components/confirmation/Confirmation';
import AwaitConfirmation from './components/awaitConfirmation/AwaitConfirmation';

const Router = () => (
  <BrowserRouter>
  <Route component={Navbar}/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/crear-cuenta" component={Signup} />
      <Route path="/confirmar-cuenta/:id" component={Confirmation} />
      <Route path="/confirmacion-pendiente" component={AwaitConfirmation} />
      <Route exact path="/iniciar-sesion" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;