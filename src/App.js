import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Food-App/" component={Home}/>
      </Switch>
    </div>
  );
};