import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Calc from './pages/calc';
import Data from './pages/data';

export default function routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calc" component={Calc} />
        <Route path="/data" component={Data} />
      </Switch>
    </BrowserRouter>
  );
}