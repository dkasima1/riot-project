import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Leaderboards from "./components/Leaderboards/Leaderboards";
import Stats from "./components/Stats/Stats";
import Champions from "./components/Champions/Champions";
import Deets from "./components/Deets";
import Memes from "./components/Memes";
import Home from "./components/Home";
import Summoner from "./components/Summoner";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/Home" component={ Home } />
          <Route path="/Leaderboards" component={ Leaderboards } />
          <Route path="/Champions/*" component={ Memes } />
          <Route path="/Champions" component={ Champions } />
          <Route path="/Summoner/:summoner" component={ Summoner } />
          <Route path="/Stats" component={ Stats } />
          <Route path="/Deets" component={ Deets } />
          <Route path="/Memes" component={ Memes } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
