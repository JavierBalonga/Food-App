import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import background from './static/background.png'

export default function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Switch>
        <Route path="/Food-App/" component={Home}/>
      </Switch>
    </div>
  );
};