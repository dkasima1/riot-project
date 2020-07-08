import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Canvas />
        <Switch>
          {/* <Route path="/Sorting/Bubble_Sort" component={ Bubble_Sort } /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
