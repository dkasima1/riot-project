import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Leaderboards from "./components/Leaderboards/Leaderboards";
import Stats from "./components/Stats/Stats";
import Champions from "./components/Champions/Champions";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/Home" component={ Home } />
          <Route path="/Leaderboards" component={ Leaderboards } />
          <Route path="/Champions" component={ Champions } />
          <Route path="/Stats" component={ Stats } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
