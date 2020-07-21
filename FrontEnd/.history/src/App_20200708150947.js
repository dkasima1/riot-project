import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import SearchPage from "./components/SearchPage";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          {/* <Route path="/Leaderboards" component={ Leaderboards } />
          <Route path="/Champions" component={ Champions } />
          <Route path="/Stats" component={ Stats } /> */}
        </Switch>
        <SearchPage />
      </Router>
    </React.Fragment>
  );
}

export default App;
