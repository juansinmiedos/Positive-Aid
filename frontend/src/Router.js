import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;